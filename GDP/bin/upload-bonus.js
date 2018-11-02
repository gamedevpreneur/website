var SftpUpload = require('sftp-upload');
var fs = require('fs');

var options = {
    host: 'unitycook.com',
    username: 'sainthkh',
    path: 'public/leads',
    remoteDir: '/var/www/unitycook.com/GDP/public/leads',
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
})
.upload();