const path = require('path');
const Database = require('better-sqlite3');

const imported = new Database(path.join(__dirname, 'posts2.db'));
const serverDB = new Database(path.join(__dirname, 'posts.db'));

var rows = imported.prepare('SELECT * FROM posts').all();

rows.forEach(post => {
    var row = serverDB.prepare('SELECT * from posts where slug = ?').get(post.slug);

    if(!row) {
        serverDB.prepare('INSERT INTO posts VALUES(@title, @description, @content, @slug, @time, @src)').run(post);
    } else {
        serverDB.prepare('UPDATE posts SET title=@title, description=@description, content=@content, time=@time, src=@src WHERE slug=@slug').run(post);
    }
})