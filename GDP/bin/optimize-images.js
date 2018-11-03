const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const fs = require('fs-extra');

fs.copySync('./assets/img', './public/img')
console.log('copied images')

const walk = require('walk');

function optimizeImages(dir) {
    (async () => {
        const files = await imagemin([`${dir}/*.{jpg,png}`], dir, {
            plugins: [
                imageminJpegtran(),
                imageminPngquant({quality: '65-80'})
            ]
        });
     
        files.forEach(file => {
            console.log(`processed ${file.path}`);
        });
    })();
}

optimizeImages('./public/img')

walker = walk.walk('./public/img')

walker.on("directory", function(root, stat, next){
    optimizeImages(`${root}/${stat.name}`);
    next();
})