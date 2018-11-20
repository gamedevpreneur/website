const fs = require('fs-extra');
const chokidar = require('chokidar');
const { exec } = require('child_process');

var watcher = chokidar.watch('md');

watcher.on('change', path => {
    exec(`npm run cp ${path}`, function(err, stdout, stderr) {
        console.log(`${path} is compiled.`);
        console.log('stdout:')
        console.log(stdout);
        console.log('stderr:')
        console.log(stderr);
    })
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