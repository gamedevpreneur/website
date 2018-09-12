const fs = require('fs');
const { exec } = require('child_process');

var counter = 0;
fs.watch('md', (event, filename) => {
    counter++;
    if (counter == 3) {
        exec(`npm run cp ${filename}`, function(err, stdout, stderr) {
            console.log('stdout:')
            console.log(stdout);
            console.log('stderr:')
            console.log(stderr);
        })

        counter = 0;
    }
})

console.log('auto compilation started.')