const fileOps = require("./utility/fileops");
const _transpiler = require("./utility/transpiler");
const args = require("./utility/args").ReadArgs();

let layoutRgx = /^.*?_(.*?)\.html/img;

for (let _index = 0; args.view && _index < args.view.length; _index++) {
    let folder = args.view[_index];
    let files = fileOps.ReadFiles(__dirname, folder);
    let layout = "{{_CONTENT_}}";
    let lyf = files.filter(f => layoutRgx.test(f));
    if (lyf && lyf.length > 0) {
        layout = fileOps.ReadFile(__dirname, lyf[0]);
    }
    for (let _i = 0; _i < files.length; _i++) {
        const file = files[_i];
        const name = fileOps.MergePath(__dirname, args.output, file);
        
        if (!layoutRgx.test(file)) {
            if (file.endsWith(".md") || file.endsWith(".html") || file.endsWith(".htm")) {
                let content = fileOps.ReadFile(__dirname, file);
                const transpiler = _transpiler.Start(content, layout);
                if (file.endsWith(".md")) {
                    transpiler.MdToHtml();
                }
                content = transpiler.Export();
                fileOps.WriteFile(name, content);
            } else {
                fileOps.Copy(file, name);
            }
        }
    }
}

