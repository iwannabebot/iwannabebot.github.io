const path = require('path');
const fs = require('fs');

exports.MergePath = function(... paths){
    return path.join(... paths);
}

exports.ReadFiles = function (_dirname, rootPath) {
    let filelist = [];
    let absRoot = rootPath;
    if(!path.isAbsolute(absRoot)){
        absRoot = path.join(_dirname, rootPath);
    }
    if(fs.existsSync(absRoot)){
        let files = fs.readdirSync(absRoot);
        
        files.forEach(function (file) {
            if (fs.statSync(path.join(absRoot, file)).isDirectory()) {
                let childFiles = module.exports.ReadFiles(_dirname, path.join(rootPath, file));
                filelist.push(...childFiles);
            }
            else {
                filelist.push(path.join(rootPath, file));
            }
        });
    }
    
    return filelist;
};

exports.ReadFile = function (_dirname, rootPath) {
    if (!fs.statSync(path.join(_dirname, rootPath)).isDirectory())
        return fs.readFileSync(path.join(_dirname, rootPath)).toString();
    return null;
};

exports.WriteFile = function (rootPath, text, callback) {
    let parentDir = path.dirname(rootPath);
    if(!fs.existsSync(parentDir)) {
        fs.mkdirSync(parentDir, { recursive: true });
    }
    if(callback) {
        fs.writeFile(rootPath, text, null, function (err) {
            if (!!callback)
                callback(err);
        });
    } else {
        fs.writeFileSync(rootPath, text);
    }
};

exports.Copy = function (oldPath, newPath, callback) {
    var readStream = fs.createReadStream(oldPath);
    var writeStream = fs.createWriteStream(newPath);

    readStream.on('error', callback);
    writeStream.on('error', callback);

    readStream.on('close', function () {
        fs.unlink(oldPath, callback);
    });

    readStream.pipe(writeStream);
};

exports.Move = function(oldPath, newPath, callback) {
    fs.rename(oldPath, newPath, function (err) {
        if (!!err && err.code === 'EXDEV') {
            Copy(oldPath, newPath, callback);
        }
        if(!!callback)
            callback();
    });
}

exports.Delete = function (rootPath) {
    try {
        if (!fs.statSync(rootPath).isDirectory()) {
            fs.unlinkSync(path)
        }
        else {
            rimraf(rootPath);
        }
    } catch (err) {
    }
}
