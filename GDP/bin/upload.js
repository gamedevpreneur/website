const { exec } = require('child_process');
const fs = require('fs-extra');
const walk = require('walk');
const async = require('async');
const rexec = require('remote-exec');

async.series([
    // Compile SCSS and JS
    function(done) {
        console.log('compiling scss and js');
        exec('npm run production', function(err, stdout, stderr) {
            console.log('scss/js compilation finished');
            done();
        });
    },

    // Images
    // 1) Delete images
    function(done) {
        console.log('');
        console.log('deleting images')
        var deleteWalker = walk.walk('./public/img')

        deleteWalker.on('file', function(root, stat, next){
            fs.removeSync(`${root}/${stat.name}`);
            next();
        })

        deleteWalker.on('end', function() {
            done();
        })
    },
    // 2) Copy images
    function(done) {
        console.log('copying images')
        fs.copySync('./assets/img', './public/img')
        done();
    },
    // 3) Optimize images
    function(done) {
        console.log('');
        console.log('optimizing images');
        const imagemin = require('imagemin');
        const imageminJpegtran = require('imagemin-jpegtran');
        const imageminPngquant = require('imagemin-pngquant');

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

        var optimizeWalker = walk.walk('./public/img')

        optimizeWalker.on("directory", function(root, stat, next){
            optimizeImages(`${root}/${stat.name}`);
            next();
        })

        optimizeWalker.on('end', function() {
            done();
        })
    },

    // Compile posts
    function(done) {
        console.log('compiling posts');
        exec('npm run cp', function(err, stdout, stderr) {
            console.log(stdout)
            done();
        })
    },
    // Create deploy folder and copy items
    function(done) {
        console.log('Creating deploy folder')
        fs.ensureDirSync('./.deploy');
        
        const items = ['app.js', 'server.js', 'package.json', 'posts.db', 'migrate-posts.js',
            'public', 'views', 'routes'];
        items.forEach(item => {
            fs.copySync(item, `.deploy/${item}`);
        });

        fs.renameSync('.deploy/posts.db', '.deploy/posts2.db');

        done();
    },
    
    // Send files
    function(done) {
        console.log('uploading files to the server');
        var SftpUpload = require('sftp-upload');

        var options = {
            host: 'unitycook.com',
            username: 'sainthkh',
            path: '.deploy',
            remoteDir: '/var/www/unitycook.com/GDP',
            privateKey: fs.readFileSync('uc.ppk'),
        }
        var sftp = new SftpUpload(options);

        sftp.on('error', function(err) {
            throw err;
        })
        .on('uploading', function(progress) {
            console.log('Uploading', progress.file);
            console.log(progress.percent+'% completed');
        })
        .on('completed', function() {
            console.log('Upload Completed');
            done();
        })
        .upload();
    },
    // Execute remote commands
    function(done) {
        console.log('Executing remote commands.');
        const connection_options = {
            port: 22,
            username: 'sainthkh',
            privateKey: fs.readFileSync('uc.ppk'),
        };

        const hosts = [
            'unitycook.com',
        ];

        const cmds = [
            '. /var/www/unitycook.com/GDP/updater.sh',
        ];

        rexec(hosts, cmds, connection_options, function(err) {
            if(err) {
                console.log(err)
            } else {
                console.log('Execution succeeded.');
            }
            done();
        })
    },
    // Remove deploy folder
    function(done) {
        fs.removeSync('./.deploy');
        done();
    },
],
function(err, results) {
    if(err) {
        console.log(err);
    }
})


