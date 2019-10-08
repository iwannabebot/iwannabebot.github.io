const fileOps = require("./ops/fileops");
const sass = require('node-sass');
const authors = require('./authors').default;
/*
 * Start Transpiler Pipeline
 */
exports.Start = function (content, layout, relativePath) {
    this._init = require('markdown-it')();
    this._meta = {};
    this._content = content;
    this._layout = layout || `{{__CONTENT__}}`;
    if (!!relativePath)
        this._meta["relativePath"] = relativePath.replace(/\\/g, "/").replace(/\.md$/gmi, "");
    return this;
}

/*
 * Meta Transpiler Pipeline
 */
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

/*
 * Script Transpiler Pipeline
 */
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

/*
 * Style Transpiler Pipeline
 */
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

/*
 * End Transpiler Pipeline
 */
exports.Export = function (destination) {
    try {
        // Merge Layout
        this._content = this._layout.replace("{{__CONTENT__}}", this._content);
        // Static Tags
        for (let _metaKey in this._meta) {
            const metaRgx = new RegExp("\\$\\{_" + _metaKey + "_\\}", "g");
            if (_metaKey === "relativePath") {
                if (metaRgx.test(this._content)) {
                    const match = /\$\{_relativePath_\}/g.exec(this._content);
                }
            }
            this._content = this._content.replace(metaRgx, this._meta[_metaKey]);
        }
        // Cleanup Unused Components
        this._content = this._content.replace(/{{_+[A-Z]+_+}}/g, "");
        fileOps.WriteFile(destination, this._content);
    } catch (e) {
        console.error(e);
    }
    return this;
}

/*
 * Markdown Transpiler Pipeline
 */
exports.MdToHtml = function () {
    try {
        // Convert to HTML
        this._content = this._init.render(this._content);
        // CODEPEN
        this._content = this._content.replace(
            /(\<a\s+href\s*=\s*[\"\'])?(https?:\/\/)?codepen\.io\/(\w+?)\/embed\/([\w-_]+)?((\?)?(((([\w-_]+)=([\w,]+)?)(\&(amp;)?))*(([\w-_]+)=([\w,]+)?)))?([\"\']>)?((.*?)<\/a>)?/gi,
            `<iframe class='iwb-embed' height='500' style='width: 100%;' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' 
            title='$19' src='https://codepen.io/$4/embed/$4$5'>
            See the Pen <a href='https://codepen.io/$3/pen/$4'>$19</a> by $3
            (<a href='https://codepen.io/$3'>@$3</a>)
            on <a href='https://codepen.io'>CodePen</a></iframe>`
        );
        // FIDDLE
        this._content = this._content.replace(
            /(\<a\s+href\s*=\s*[\"\'])?(https?:\/\/)?jsfiddle\.net\/(.*?)?([\"\']>)((.*?)<\/a>)?/gi,
            `<iframe class='iwb-embed' border=1 height='500' style='width: 100%;' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' src="http://jsfiddle.net/$3">
            See the <a href='http://jsfiddle.net/$3'>Fiddle</a></iframe>`);
        // GISTS
        this._content = this._content.replace(
            /(<a\s+href\s*=\s*[\"\'])?(https?:\/\/)?gist\.github\.com\/(.*?)\/([\w-]+)(\.js)?(.*)?([\"\']>)(.*?)<\/a>/gi,
            `<script src="https://gist.github.com/$3/$4.js"></script>`);

        // HLJS
        this._content = this._content.replace(
            /(?<=class=")language-(\w+)/gi,
            `$1`);
        // Embed Separator Tab
        if (/(<h1|2|3|4)(>.*?)(<\/h(1|2|3|4)\>)/i.test(this._content)) {
            this._content = this._content.replace(
                /(<h1|2|3|4)(>.*?)(<\/h(1|2|3|4)\>)/i,
                `$1 class="title" $2$3 <div class="separator"></div>`
            );
        }
        // Alert Style
        if(/(<blockquote)(>\s*<p>)\s*(IMPORTANT|INFO|ALERT|NOTICE|ERROR|WARNING)\s*:/ig.test(this._content)) {
            if(/(<blockquote)(>\s*<p>)\s*(IMPORTANT|INFO)\s*:/ig.test(this._content)) {
                this._content = this._content.replace(
                    /(<blockquote)(>\s*<p>)\s*(IMPORTANT|INFO)\s*:/ig,
                    `$1 class="alert-info"$2$3:`
                );
            }
            if(/(<blockquote)(>\s*<p>)\s*(ALERT|ERROR|NOTICE)\s*:/ig.test(this._content)) {
                this._content = this._content.replace(
                    /(<blockquote)(>\s*<p>)\s*(ALERT|ERROR|NOTICE)\s*:/ig,
                    `$1 class="alert-err"$2$3:`
                );
            }
            if(/(<blockquote)(>\s*<p>)\s*(WARNING)\s*:/ig.test(this._content)) {
                this._content = this._content.replace(
                    /(<blockquote)(>\s*<p>)\s*(WARNING)\s*:/ig,
                    `$1 class="alert-warn"$2$3:`
                );
            }
        }
    }
    catch (e) {
        console.error(e);
    }
    return this;
}