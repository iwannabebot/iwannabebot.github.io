const fileOps = require("./ops/fileops");
const sass = require('node-sass');

exports.Start = function (content, layout) {
    this._init = require('markdown-it')();
    this._meta = {};
    this._content = content;
    this._layout = layout || `{{__CONTENT__}}`;
    return this;
}
exports.Meta = function () {

    try {
        // Extract Meta
        let meta$ = null;
        let xrgx = /^(.+?)\s*:\s*(.+?)$/img;
        let metacontent = /---(\r\n|\n)(^(.+?)\s*:\s*(.+?)$(\r\n|\n))+---/img.exec(this._content);
        let _meta = this._meta || {};
        if (!!metacontent) {
            let i = 0;
            do {
                meta$ = xrgx.exec(metacontent[0]);
                if (!!meta$) {
                    i++;
                    _meta[meta$[1]] = meta$[2];
                }
            } while (!!meta$);
            _meta["length"] = i;
            this._meta = _meta;
        }
        this._content = this._content.replace(/---(\r\n|\n)(^(.+?)\s*:\s*(.+?)$(\r\n|\n))+---/img, "");
        let meta = "";
        meta += `<meta charset="UTF-8">\n`;
        meta += `<meta name="viewport" content="width=device-width, initial-scale=1.0">\n`;
        meta += `<meta http-equiv="X-UA-Compatible" content="ie=edge">\n`;
        meta += `<meta name="twitter:card" content="summary" />\n`;

        for (let key in this._meta) {
            meta += `<meta property="og:${key}" content="${this._meta[key]}">\n`;
            switch (key) {
                case "name": {
                    meta += `<meta property="og:site_${key}" content="${this._meta[key]}">\n`;
                    break;
                }
            }
        }

        for (let key in this._meta) {
            meta += `<meta property="${key}" content="${this._meta[key]}">\n`;
        }

        for (let key in this._meta) {
            switch (key) {
                case "title": {
                    meta += `<title>${this._meta[key]}</title>\n`;
                    break;
                }
                case "description": {
                    break;
                }
                case "image": {
                    break;
                }
                case "site": {
                    meta += `<meta name="twitter:site" content="${this._meta[key]}" />\n`;
                }
                case "author": {
                    meta += `<meta property="twitter:creator" content="${this._meta[key]}">\n`;
                }
            }
        }
        this._layout = this._layout.replace("{{__META__}}", meta);
        this._content = this._content.replace("{{__META__}}", meta);
    } catch (e) {
        console.error(e);
    }
    return this;
}

exports.Script = function (scriptName) {
    try {
        const scriptContent = fileOps.ReadFile(scriptName);
        this._layout = this._layout.replace("{{__SCRIPT__}}", `<script>\n${scriptContent}\n</script>\n{{__SCRIPT__}}`);
        this._content = this._content.replace("{{__SCRIPT__}}", `<script>\n${scriptContent}\n</script>\n{{__SCRIPT__}}`);
    } catch (e) {
        console.error(e);
    }
    return this;
}

exports.Style = function (styleName) {
    try {
        const data = fileOps.ReadFile(styleName);
        const styleContent = sass.renderSync({
            data: data,
            includePaths: [
                "style"
            ]
        }).css.toString();
        this._layout = this._layout.replace("{{__STYLE__}}", `<style>\n${styleContent}\n</style>\n{{__STYLE__}}`);
        this._content = this._content.replace("{{__STYLE__}}", `<style>\n${styleContent}\n</style>\n{{__STYLE__}}`);
    } catch (e) {
        console.error(e);
    }
    return this;
}

exports.Export = function (destination) {
    try {
        // Merge
        this._content = this._layout.replace("{{__CONTENT__}}", this._content);
        // Cleanup
        this._content = this._content.replace(/{{_+[A-Z]+_+}}/g, "");
        fileOps.WriteFile(destination, this._content);
    } catch (e) {
        console.error(e);
    }
    return this;
}


exports.MdToHtml = function () {
    try {
        // Convert to HTML
        this._content = this._init.render(this._content);
        // Embed GISTS
        this._content = this._content.replace(
            /(https?:\/\/)?gist\.github\.com\/(.*?)\/([\w-]+)(\.js)?(.*)?/gi,
            `<script src="https://gist.github.com/$2/$3.js"></script>`);
        this._content = this._content.replace(
            /(?<=class=")language-(\w+)/gi,
            `$1`);
    }
    catch (e) {
        console.error(e);
    }
    return this;
}