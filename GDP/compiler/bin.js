const filename = process.argv[2];

if (filename == '') {
    console.log("Usage: npm run compile [filename]")
    return;
}

const fs = require('fs');
const yamlFront = require('yaml-front-matter');
const moment = require('moment');
const compile = require('./index')

var post = fs.readFileSync('./md/' + filename).toString();
post = yamlFront.loadFront(post);
post.content = compile(post.__content)
post.time = moment(post.time).format();

const Database = require('better-sqlite3');
const db = new Database('posts.db');

var row = db.prepare('SELECT * from posts where slug = ?').get(post.slug);

if(!row) {
    db.prepare('INSERT INTO posts VALUES(@title, @description, @content, @slug, @time, @src)').run(post);
} else {
    db.prepare('UPDATE posts SET title=@title, description=@description, content=@content, time=@time, src=@src WHERE slug=@slug').run(post);
}