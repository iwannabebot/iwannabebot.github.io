const fileOps = require("./ops/fileops");
const _transpiler = require("./transpiler");
const args = require("./ops/args").ReadArgs();


let layoutRgx = /^.*?_(.*?)\.html/img;

for (let _index = 0; args.view && _index < args.view.length; _index++) {
    
    let folder = args.view[_index];
    const absPath = fileOps.MergePath(__dirname, folder);

    if (fileOps.IsFile(absPath)) {
        // Root level files
        const file = fileOps.ReadFile(__dirname, folder);
        const transpiler = _transpiler.Start(file, "")
        transpiler.Meta();
        try {
            const scriptName = fileOps.MergePath(__dirname, args.script, "index.js");
            transpiler.Script(scriptName);
        } catch (e) {
            console.error(e);
        }
        try {
            const styleName = fileOps.MergePath(__dirname, args.style, "index.scss");
            transpiler.Style(styleName);
        } catch (e) {
            console.error(e);
        }
        const name = fileOps.MergePath(__dirname, args.output, folder);
        transpiler.Export(name);
    } else {
        // In Folders
        let files = fileOps.ReadFiles(__dirname, folder);
        
        // Get Layout
        let layout = null;
        let lyf = files.filter(f => layoutRgx.test(f));
        if (lyf && lyf.length > 0) {
            layout = fileOps.ReadFile(__dirname, lyf[0]);
        }

        // Every file in view folder
        for (let _i = 0; _i < files.length; _i++) {
            const file = files[_i];
            const name = fileOps.MergePath(__dirname, args.output, file);
            if (!layoutRgx.test(file)) {

                if (file.endsWith(".md") || file.endsWith(".html") || file.endsWith(".htm")) {
                    
                    // Get content
                    let content = fileOps.ReadFile(__dirname, file);
                    // Initialize transpiler
                    const transpiler = _transpiler.Start(content, layout);
                    // Load Meta
                    _transpiler.Meta();
                    // Convert MD to HTML
                    if (file.endsWith(".md")) {
                        transpiler.MdToHtml();
                    }
                    // Load Script
                    if (transpiler._meta.script) {
                        try {
                            const srcs = transpiler._meta.script.split(',');
                            for (let i = 0; i < srcs.length; i++) {
                                const scriptName = fileOps.MergePath(__dirname, args.script, srcs[i]);
                                transpiler.Script(scriptName);
                            }
                        } catch (e) {
                            console.log(e);
                        }
                    }
                    // Load Styles
                    if (transpiler._meta.style) {
                        try {
                            const styles = transpiler._meta.style.split(',');
                            for (let i = 0; i < styles.length; i++) {
                                const styleName = fileOps.MergePath(__dirname, args.style, styles[i]+".scss");
                                transpiler.Style(styleName);
                            }
                        } catch (e) {
                            console.log(e);
                        }
                    }
                    // Export to html
                    transpiler.Export(name.replace(/(?<=\.)(md|html|htm)$/igm, "html"));

                } else if (file.endsWith(".md") || file.endsWith(".html") || file.endsWith(".htm")) {
                    fileOps.Copy(file, name);
                }
            }
        }
    }
}

