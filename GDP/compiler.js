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
var ics = []
var ts = []
var rtables = []

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
post = post.replace(/\[icode(?:\s+title="([\s\S]*?)")?\]([\s\S]*?)\[\/icode\]/g, function(match, p1, p2) {
    ics.push({
        title: p1,
        code: p2,
    });
    return '<ics>';
})
post = post.replace(/\[typescript(?:\s+title="([\s\S]*?)")?\]([\s\S]*?)\[\/typescript\]/g, function(match, p1, p2) {
    ts.push({
        title: p1,
        code: p2,
    });
    return '<ts>';
})
post = post.replace(/\[rtable(?:\s+name="([\s\S]*?)")?\]([\s\S]*?)\[\/rtable\]/g, function(match, p1, p2) {
    rtables.push({
        name: p1,
        content: p2,
    })

    return '<rtable>';
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
compiled = compiled.replace(/<ics>/g, match => {
    return '<code class="language-csharp">' + 
        prism.highlight(ics[i].code, prism.languages.csharp, 'csharp').trim() +
    '</code>\n';
})

var i = 0;
compiled = compiled.replace(/<ts>/g, function(match) {
    return '\n<pre class="language-javascript"><code class="language-javascript">' + 
        prism.highlight(ts[i++].code, prism.languages.typescript, 'typescript').trim() +
        '</code></pre>\n';

})

var i = 0;
compiled = compiled.replace(/<rtable>/g, function(match) {
    var raw = rtables[i].content.trim();
    var name = rtables[i].name;
    var content = {};

    raw = raw.replace(/\r\n/g, '\n');
    var rows = raw.split('\n');
    
    var heads = rows[0].split('|');
    content.heads = [];

    heads.forEach(item => {
        item = item.trim();
        if (item != '') {
            content.heads.push(item);
        }
    });

    content.style = '';
    content.heads.forEach((item, i) => {
        content.style += `.${name} td:nth-of-type(${i + 1}):before { content: "${item}" } `;
    });

    rows.shift();
    rows.shift();
    content.body = [];

    rows.forEach(row => {
        var rowItems = [];

        var items = row.split('|');
        items.forEach(item => {
            item = item.trim();
            if (item != '') {
                rowItems.push(item);
            }
        })

        content.body.push(rowItems);
    })

    var result = '';
    result += [
        '<div class="table-wrap">',
        `\t<style>${content.style}</style>`,
        `\t<table class="${name}">`,
        '\t\t<thead>',
        '\t\t\t<tr>',
        content.heads.map(item => `\t\t\t\t<th>${item}</th>`).join('\n'),
        '\t\t\t</tr>',
        '\t\t</thead>',
        '\t\t<tbody>',
        content.body.map(row => 
            '\t\t\t<tr>\n' + 
                row.map(item => `\t\t\t\t<td>${item}</td>`).join('\n') + '\n' +
            '\t\t\t</tr>'
        ).join('\n'),
        '\t\t</tbody>',
        '\t</table>',
        '</div>',
    ].join('\n');

    return result;
})


var dest = 'pages/' + filename.replace('md/', '').replace('.md', '.vue');

var destContent = fs.readFileSync(dest).toString();

var finalContent = destContent.replace(/<Post>[\s\S]*<\/Post>/g, '<Post>\n' + compiled + '</Post>\n');

fs.writeFileSync(dest, finalContent);
