const compilePost = require('.')
const fs = require('fs');
const path = require('path');
const hbs = require('handlebars');
const sass = require('node-sass');
const HTML5ToPDF = require('html5-to-pdf')

const fileName = process.argv[2];
const filePath = './cheatsheet/' + fileName;

var post = fs.readFileSync(filePath).toString();
post = compilePost(post)

var view = fs.readFileSync('./views/layouts/cheatsheet.hbs').toString();
var template = hbs.compile(view);
var html = template({body: post});
html = html.replace(/data-src=/g, 'src=')
html = html.replace(/src=".\/img\/now-loading.png"/g, '');
html = html.replace('class="lozad"', '');
fs.writeFileSync('./temp/cheatsheet.html', html);

var result = sass.renderSync({
    file: './assets/sass/cheatsheet.scss',
});

fs.writeFileSync('./temp/cheatsheet-style.css', result.css);

const run = async () => {
    const html5ToPDF = new HTML5ToPDF({
        inputPath: path.join(__dirname, '../temp/cheatsheet.html'),
        outputPath: path.join(__dirname, `../public/leads/${fileName.replace('.md', '')}.pdf`),
        templatePath: path.join(__dirname, "../temp"),
        renderDelay: 1000,
        pdf: {
            margin: {
                top: '0.5in',
                right: '0.5in',
                bottom: '0.5in',
                left: '0.5in',
            },
            printBackground: true,
            //landscape: true,
            format: 'A3',
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