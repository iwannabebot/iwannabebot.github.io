function Init() {
    return require('markdown-it')();
}

exports.Transpile = function(_layout,content) {
    return _layout.replace("{{_CONTENT_}}", content);
}

exports.MdToHtml = function (mdcontent) {
    return Init().render(mdcontent);
};