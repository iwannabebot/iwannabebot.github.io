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
                try {
                    meta$ = xrgx.exec(metacontent[0]);
                    if (!!meta$) {
                        i++;
                        _meta[meta$[1]] = meta$[2];
                    }
                } catch{
                    meta$ = null;
                }
            } while (!!meta$);
            _meta["length"] = i;
            this._meta = _meta;
        }
        this._content = this._content.replace(/---(\r\n|\n)(^(.+?)\s*:\s*(.+?)$(\r\n|\n))+---/img, "");
        let meta = "";

        // Univeral Meta
        meta += `<meta charset="UTF-8">\n`;
        meta += `<meta name="viewport" content="width=device-width, initial-scale=1.0">\n`;
        meta += `<meta http-equiv="X-UA-Compatible" content="ie=edge">\n`;
        meta += `<meta name="twitter:card" content="summary" />\n`;
        meta += `<meta property="og:site_name" content="https://www.nilayvishwakarma.com">\n`;
        meta += `<meta name="twitter:site" content="https://www.nilayvishwakarma.com" />\n`
        // Embed Meta
        for (let key in this._meta) {
            switch (key) {
                case "title": {
                    meta += `<title>${this._meta[key]}</title>\n`;
                    break;
                }
                case "image": {
                    meta += `<meta property="${key}" content="${this._meta[key]}">\n`;
                    break;
                }
                default: {
                    meta += `<meta property="${key}" content="${this._meta[key]}">\n`;
                }
            }
        }

        // Open Graph Meta
        for (let key in this._meta) {
            switch (key) {
                case "image": {
                    meta += `<meta property="og:${key}" content="${this._meta[key]}">\n`;
                    break;
                }
                default: {
                    meta += `<meta property="og:${key}" content="${this._meta[key]}">\n`;
                }
            }
        }

        // Twitter Meta
        for (let key in this._meta) {
            switch (key) {
                case "title": {
                    break;
                }
                case "description": {
                    break;
                }
                case "image": {
                    break;
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
        if (this._meta.options) {
            this._layout = this._layout.replace("{{__STYLE__}}", `<style>
                .options { display:none; }
            </style>
            {{__STYLE__}}`);
        }
        if (this._meta.list == "true" || this._meta.list == true) {
            // const _data = fileOps.ReadFile(fileOps.MergePath(__dirname, 'style', 'list.scss'));
            // const _styleContent = sass.renderSync({
            //     data: data,
            //     includePaths: [
            //         "style"
            //     ]
            // }).css.toString();
            // this._layout = this._layout.replace("{{__STYLE__}}", `<style>\n${_styleContent}\n</style>\n{{__STYLE__}}`);
        }
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


        // TOC builder
        let partial = this._content;
        const rgxTitle = RegExp('(<\\s*h(1|2|3|4|5))\\s*(.*?)>(.*?)(<\\/h(1|2|3|4|5)\\s*>)', 'g');
        const rgxMainTitle = RegExp('(<\\s*h1)\\s*(.*?)>(.*?)(<\\/h1\\s*>)', 'g');
        var _titleRgxGroups;

        while ((_titleRgxGroups = rgxTitle.exec(this._content)) !== null) {
            const aname = _titleRgxGroups[4].replace(/\W/g, "_").replace(/_+/g, "_");
            let con = `${_titleRgxGroups[1]} ${_titleRgxGroups[3]}><a name="${aname}">${_titleRgxGroups[4]}</a>${_titleRgxGroups[5]}`;
            if (rgxMainTitle.test(_titleRgxGroups[0])) {
                con = `${_titleRgxGroups[1]} class="title" ${_titleRgxGroups[3]}><a name="${aname}">${_titleRgxGroups[4]}</a>${_titleRgxGroups[5]}`;
            }
            partial = partial.replace(_titleRgxGroups[0], con)
        }
        this._content = partial;

        // CODEPEN
        this._content = this._content.replace(
            /(\<a\s+href\s*=\s*[\"\'])?(https?:\/\/)?codepen\.io\/(\w+?)\/\w+\/([\w-_]+)?((\?)?(((([\w-_]+)=([\w,]+)?)(\&(amp;)?))*(([\w-_]+)=([\w,]+)?)))?([\"\']>)?((.*?)<\/a>)?/gi,
            `<iframe class='iwb-embed' height='500' style='width: 100%;' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' 
            title='$19' src='https://codepen.io/$4/embed/$4$5'>
            See the Pen <a href='https://codepen.io/$3/pen/$4'>$19</a> by $3 (<a href='https://codepen.io/$3'>@$3</a>) on <a href='https://codepen.io'>CodePen</a>
            </iframe>`
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
        //this._content = this._content.replace(
        //    /(?<=class=")language-(\w+)/gi,
        //    `$1`);
        // Embed Separator Tab
        if (/(<h1)(>.*?)(<\/h1\>)/i.test(this._content)) {
            this._content = this._content.replace(
                /(<h1)(>.*?)(<\/h1\>)/i,
                `$1 class="title" $2$3 <div class="separator"></div>`
            );
        }
        // Convert all anchor tags to target new tab
        this._content = this._content.replace(/<a\s+/gi, "<a target='_blank' ")
        // Alert Style
        if (/(<blockquote)(>\s*<p>)\s*(IMPORTANT|INFO|ALERT|NOTICE|ERROR|WARNING)\s*:/ig.test(this._content)) {
            if (/(<blockquote)(>\s*<p>)\s*(IMPORTANT|INFO)\s*:/ig.test(this._content)) {
                this._content = this._content.replace(
                    /(<blockquote)(>\s*<p>)\s*(IMPORTANT|INFO)\s*:/ig,
                    `$1 class="alert-info"$2$3:`
                );
            }
            if (/(<blockquote)(>\s*<p>)\s*(ALERT|ERROR|NOTICE)\s*:/ig.test(this._content)) {
                this._content = this._content.replace(
                    /(<blockquote)(>\s*<p>)\s*(ALERT|ERROR|NOTICE)\s*:/ig,
                    `$1 class="alert-err"$2$3:`
                );
            }
            if (/(<blockquote)(>\s*<p>)\s*(WARNING)\s*:/ig.test(this._content)) {
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