exports.Start = function (content, layout) {
    this._init = require('markdown-it')();
    this._content = content;
    this._layout = layout;
    return this;
}
exports.Export = function () {
    this._content = this._layout.replace("{{_CONTENT_}}", this._content);
    return this._content;
}

exports.MdToHtml = function () {
    // Embed GISTS
    this._content = this._init.render(this._content);
    this._content = this._content.replace(
        /(https?:\/\/)?gist\.github\.com\/(.*?)\/([\w-]+)(\.js)?(.*)?/gi,
        `<script src="https://gist.github.com/$2/$3.js"></script>`);
    
    return this;
}