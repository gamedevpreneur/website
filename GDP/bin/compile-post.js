const compilePost = require('../compiler/index')

const fs = require('fs');
const yamlFront = require('yaml-front-matter');
const moment = require('moment');
const walk = require('walk');
const Database = require('better-sqlite3');


const filename = process.argv[2];
var compileAll = false;

if (!filename) {
    compileAll = true;
}

const db = new Database('posts.db');

function compile(filePath) {
    var post = fs.readFileSync(filePath).toString();
    post = yamlFront.loadFront(post);
    post.content = compilePost(post.__content)
    post.time = moment(post.time).format();

    var row = db.prepare('SELECT * from posts where slug = ?').get(post.slug);

    if(!row) {
        db.prepare('INSERT INTO posts VALUES(@title, @description, @content, @slug, @time, @src)').run(post);
    } else {
        db.prepare('UPDATE posts SET title=@title, description=@description, content=@content, time=@time, src=@src WHERE slug=@slug').run(post);
    }
}

if (require.main == module) {
    if (!compileAll) {
        compile(filename)
    } else {
        walker = walk.walk('./md')
    
        walker.on("file", function(root, fileStats, next) {
            compile(root + '/' + fileStats.name);
            next();
        })
    }    
} else {
    module.exports = compile;
}



