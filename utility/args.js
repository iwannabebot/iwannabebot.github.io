exports.ReadArgs = function () {
    let options = {};
    for (let i = 0; i < process.argv.length; i++) {
        let arg = process.argv[i];
        let rgx = /--(.*?)=\'(.*?)\'/g;
        let arrgx = /(?<=;|')\w*(?=;|')/g;
        if (rgx.test(arg)) {
            let key = arg.replace(rgx, `$1`);
            let val = arg.replace(rgx, `$2`);
            if (arrgx.test(val)) {
                val = val.split(';');
            }
            options[key] = val;
        }
    }
    return options;
}