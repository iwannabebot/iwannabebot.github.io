const fileOps = require("./utility/fileops");
const transpiler = require("./utility/transpiler");
const args = require("./utility/args").ReadArgs();
let layoutRgx = /^.*?_(.*?)\.html/img;
// Copy assets
if (args.view) {
    args.view.forEach(folder => {
        let files = fileOps.ReadFiles(__dirname, folder);
        let layout = "{{_CONTENT_}}";
        let lyf = files.filter(f => layoutRgx.test(f));
        if(lyf && lyf.length > 0) {
            layout = fileOps.ReadFile(__dirname, lyf[0]);
        }
        for(let _i = 0; _i < files.length; _i++){
            const file = files[_i];
            if(!layoutRgx.test(file)){
                if (file.endsWith(".md")) {
                    let content = fileOps.ReadFile(__dirname, file);
                    content = transpiler.MdToHtml(content);
                    content = transpiler.Transpile(layout, content);
                    fileOps.WriteFile(fileOps.MergePath(__dirname, args.output, file), content);
                }
                else if (file.endsWith(".html")) {
                    let content = fileOps.ReadFile(__dirname, file);
                    content = transpiler.Transpile(layout, content);
                    fileOps.WriteFile(fileOps.MergePath(__dirname, args.output, file), content);
                } else {
                    fileOps.Copy(file, fileOps.MergePath(__dirname, args.output, file));
                }
            }
        }
    });
}

