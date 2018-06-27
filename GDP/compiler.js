const filename = process.argv[2];

if (filename == '') {
    console.log("Usage: npm run compile [filename]")
    return;
}

const fs = require('fs');
const markdown = require('markdown-it')({
    html: true,
    xHtmlOut: true,
    breaks: true,
});
const prism = require('prismjs');
var loadLanguages = require('prismjs/components/index.js');
loadLanguages(['csharp', 'typescript']);

var post = fs.readFileSync(filename).toString();
post = post.replace(/\[javascript\]([\s\S]*)\[\/javascript\]/g, function(match, p1) {
    return prism.highlight(p1, prism.languages.javascript, 'javascript');
})
post = post.replace(/\[code\]([\s\S]*)\[\/code\]/g, function(match, p1) {
    return prism.highlight(p1, prism.languages.csharp, 'csharp');
})
post = post.replace(/\[typescript\]([\s\S]*)\[\/typescript\]/g, function(match, p1) {
    console.log(p1);
    return prism.highlight(p1, prism.languages.typescript, 'typescript');
})

var compiled = markdown.render(post);
compiled = compiled.replace(/<ContentBlock>/g, '</ContentBlock>\n\n<ContentBlock>');
fs.writeFileSync(filename + '.html', compiled);
