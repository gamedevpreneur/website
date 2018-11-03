const sharp = require('sharp');
const sizeOf = require('image-size');
const path = require('path');
const walk = require('walk');
const mkdirp = require('mkdirp');

walker = walk.walk('./public/img')

walker.on("file", function(root, fileStats, next) {
    var filePath = root + '/' + fileStats.name;
        
    var fileExt = path.extname(fileStats.name);
    var fileName = path.basename(fileStats.name, fileExt);
    fileName = fileName + '-{size}' + fileExt;

    var relPath = path.relative('./public/img', root);
    var resultPath = path.join('./public/res-img/', relPath);
    var pathTemplate = path.join(resultPath, fileName);

    console.log(`processing ${fileStats.name}`);

    mkdirp(resultPath, function(err) {
        var { width, _ } = sizeOf(filePath)

        if (width > 700) {
            sharp(filePath)
            .resize(700)
            .toFile(pathTemplate.replace('{size}', '700px'))
        }

        if (width > 350) {
            sharp(filePath)
            .resize(350)
            .toFile(pathTemplate.replace('{size}', '300px'))
        }
    })

    next();
})