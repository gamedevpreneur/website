const fs = require('fs');
const path = require("path")
const yamlFront = require('yaml-front-matter');
const sass = require('node-sass');
const hbs = require('handlebars');
const HTML5ToPDF = require('html5-to-pdf')

const compilePost = require('./index')

const fileName = process.argv[2]
const filePath = './md/' + fileName;

var post = fs.readFileSync(filePath).toString();
post = yamlFront.loadFront(post);
post.content = compilePost(post.__content, true)

var view = fs.readFileSync('./views/layouts/book.hbs').toString();
var template = hbs.compile(view);
var html = template({body: post.content});
html = html.replace(/data-src=/g, 'src=')
html = html.replace(/src=".\/img\/now-loading.png"/g, '');
html = html.replace('class="lozad"', '');
fs.writeFileSync('./public/book.html', html);

var result = sass.renderSync({
    file: './assets/sass/book.scss',
});

fs.writeFileSync('./public/book-style.css', result.css);

const run = async () => {
  const html5ToPDF = new HTML5ToPDF({
    inputPath: path.join(__dirname, '../public/book.html'),
    outputPath: path.join(__dirname, `../public/leads/${fileName.replace('.md', '')}-ebook.pdf`),
    templatePath: path.join(__dirname, "../public"),
    renderDelay: 1000,
    include: [
      //path.join(__dirname, '../.ebook/style.css'),
    ],
    pdf: {
        margin: {
            top: '0in',
            right: '0.5in',
            bottom: '0in',
            left: '0.5in',
        },
        printBackground: true,
    }
  })
 
  await html5ToPDF.start()
  await html5ToPDF.build()
  await html5ToPDF.close()
  console.log("DONE")
  process.exit(0)
}
 
// Usage in try/catch block
try {
  run()
} catch (error) {
  console.error(error)
}