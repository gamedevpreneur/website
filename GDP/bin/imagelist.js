var fs = require('fs');
var post = fs.readFileSync('./temp/post.md').toString();
fs.writeFileSync('./temp/images.txt', post.match(/\!\[.*?\]/g).join('\n'));
