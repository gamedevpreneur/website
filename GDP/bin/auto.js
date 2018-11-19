const fs = require('fs-extra');
const compilePost = require('./compile-post');
const chokidar = require('chokidar');
const walk = require('walk');

var watcher = chokidar.watch('md');

watcher.on('change', path => {
    try {
        compilePost(path);
        console.log(`${path} is compiled.`);
    } 
    catch(e) {
        console.log(e);
    }
})

var imgWatcher = chokidar.watch('assets/img');

var copyImage = function(path) {
    var dest = path.replace('assets', 'public');
    fs.ensureFileSync(dest);
    fs.copyFileSync(path, dest);
    console.log(`copied ${path}.`);
}

imgWatcher.on('add', copyImage);
imgWatcher.on('change', copyImage)

console.log('auto compilation started.')