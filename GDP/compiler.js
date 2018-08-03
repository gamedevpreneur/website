const filename = process.argv[2];

if (filename == '') {
    console.log("Usage: npm run compile [filename]")
    return;
}

const fs = require('fs');
var post = fs.readFileSync(filename).toString();

const prism = require('prismjs');
var loadLanguages = require('prismjs/components/index.js');
loadLanguages(['csharp', 'typescript']);

var js = []
var cs = []
var ts = []

post = post.replace(/[“”]/g, '"').replace(/[‘’]/g, "'")
post = post.replace(/\[javascript(?:\s+title="([\s\S]*?)")?\]([\s\S]*?)\[\/javascript\]/g, function(match, p1, p2) {
    js.push({
        title: p1,
        code: p2,
    });
    return '<js>';
})
post = post.replace(/\[code(?:\s+title="([\s\S]*?)")?\]([\s\S]*?)\[\/code\]/g, function(match, p1, p2) {
    cs.push({
        title: p1,
        code: p2,
    });
    return '<cs>';
})
post = post.replace(/\[typescript(?:\s+title="([\s\S]*?)")?\]([\s\S]*?)\[\/typescript\]/g, function(match, p1, p2) {
    ts.push({
        title: p1,
        code: p2,
    });
    return '<ts>';
})


const markdown = require('markdown-it')({
    html: true,
    xHtmlOut: true,
    breaks: true,
});
const { markdownItTable } = require('markdown-it-table');
markdown.use(markdownItTable);

post = post.replace(/\r\n/g, '\n');
var lines = post.split('\n\n');
var compiledLines = []

lines.forEach(line => {
    if (line[0] != '<') {
        compiledLines.push(markdown.render(line));
    } else {
        compiledLines.push(line);
    }
})

var compiled = compiledLines.join('\n');

var i = 0;
compiled = compiled.replace(/<js>/g, function(match) {
    var template = ''
    if (js[i].title) {
        template = '\n<div class="code-snippet">\n' +
            '<div class="code-snippet-title-wrap">\n' +
                '\t<div class="code-snippet-javascript">C#</div>\n' +
                `\t<div class="code-snippet-title">${cs[i].title}</div>\n` +
            '</div>\n' +
            '<pre class="language-javascript"><code class="language-javascript">' + 
                prism.highlight(js[i].code, prism.languages.javascript, 'javascript').trim() +
            '</code></pre>' +
        '</div>\n';
    } else {
        template = 
            '\n<pre class="language-javascript"><code class="language-javascript">' + 
                prism.highlight(js[i].code, prism.languages.javascript, 'javascript').trim() +
            '</code></pre>\n'
    }
    i++;
    return template
})

var i = 0;
compiled = compiled.replace(/<cs>/g, function(match) {
    var template = ''
    if (cs[i].title) {
        template = '\n<div class="code-snippet">\n' +
            '<div class="code-snippet-title-wrap">\n' +
                '\t<div class="code-snippet-csharp">C#</div>\n' +
                `\t<div class="code-snippet-title">${cs[i].title}</div>\n` +
            '</div>\n' +
            '<pre class="language-csharp"><code class="language-csharp">' + 
                prism.highlight(cs[i].code, prism.languages.csharp, 'csharp').trim() +
            '</code></pre>\n' +
        '</div>\n';
    } else {
        template = 
        '\n<pre class="language-csharp"><code class="language-csharp">' + 
            prism.highlight(cs[i].code, prism.languages.csharp, 'csharp').trim() +
        '</code></pre>\n'
    }
    i++;
    return template;
})

var i = 0;
compiled = compiled.replace(/<ts>/g, function(match) {
    return prism.highlight(ts[i++].code, prism.languages.typescript, 'typescript').trim();
})

fs.writeFileSync(filename + '.html', compiled);
