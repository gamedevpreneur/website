const filename = process.argv[2];

if (filename == '') {
    console.log("Usage: npm run compile [filename]")
    return;
}

const fs = require('fs');
const compile = require('./index')

var post = fs.readFileSync('./md/' + filename).toString();
post = compile(post)

const layout = fs.readFileSync('./layouts/default.hbs').toString();
const handlebars = require('handlebars');
const template = handlebars.compile(layout)
post = template({
    content: post,
});

var dest = 'pages/' + filename.replace('.md', '.html');
fs.writeFileSync(dest, post);