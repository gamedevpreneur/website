const filename = process.argv[2];

if (filename == '') {
    console.log("Usage: npm run compile [filename]")
    return;
}

const fs = require('fs');
const path = require('path');
const yamlFront = require('yaml-front-matter');
const compile = require('./index')

var post = fs.readFileSync('./md/' + filename).toString();
post = yamlFront.loadFront(post);
var postContent = compile(post.__content)

const layout = fs.readFileSync('./views/layout.hbs').toString();
const hbs = require('hbs');
const handlebars = hbs.handlebars;
const partialPath = path.join(__dirname, '/../views/partials');
const partials = fs.readdirSync(partialPath);
partials.forEach(filename => {
    if (filename == '.' || filename == '..') return;
    const partialContent = fs.readFileSync(partialPath + '/' + filename).toString();
    const partialName = path.basename(filename, '.hbs')
    handlebars.registerPartial(partialName, partialContent)
})
const template = handlebars.compile(layout)
var compiled = template(Object.assign({
    body: postContent,
}, post));

var dest = 'pages/' + filename.replace('.md', '.html');
fs.writeFileSync(dest, compiled);