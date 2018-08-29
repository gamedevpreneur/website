const markdown = require('marked');
const he = require('he');
const prism = require('prismjs');
var loadLanguages = require('prismjs/components/index.js');
loadLanguages(['csharp', 'typescript']);

const renderer = new markdown.Renderer();

renderer.heading = function(text, level) {
    level = level + 2;
    var tagName = `h${level}`;
    var className = {}
    className[3] = 'subhead';
    className[4] = 'sectionhead';
    return `<${tagName} class="${className[level]}">${text}</${tagName}>\n\n`;
}

renderer.code = function(code, language, escaped) {
    code = code.replace(/    /g, '\t');
    language = language ? language : 'csharp';
    return `<pre class="language-${language}"><code class="language-${language}">` + 
                prism.highlight(code, prism.languages[language], language).trim() +
            '</code></pre>\n'
}

renderer.codespan = function(code) {
    code = he.decode(code);
    return  '<code class="language-csharp">' + 
                prism.highlight(code, prism.languages.csharp, 'csharp').trim() +
            '</code>'
}

renderer.link = function(href, title, text) {
    if (href[0] == '/') {
        href = 'https://gamedevpreneur.com' + href;
    } else {
        text = text + `<i class="fas fa-external-link-alt"></i>`;
    }
    return `<a href="${href}"${title ? ` title="${title}"`:''}>${text}</a>`
}

renderer.image = function(href, title, text) {
    return  `<div class="post-image-wrap">\n` +
                `<img class="lozad" data-src="${href}" src="./img/now-loading.jpg" title="${title}" alt="${text}" />\n` +
            `</div>`
}

renderer.tableID = 0;
renderer.table = function(header, body) {
    var re = /<th[^>]*>(.*?)<\/th>/g;
    var headerNames = []

    var m;
    do {
        m = re.exec(header);
        if (m) {
            headerNames.push(m[1])
        }
    } while (m);

    var name = `table-${this.tableID}`;
    this.tableID++;

    var style = '';
    headerNames.forEach((item, i) => {
        style += `.${name} td:nth-of-type(${i + 1}):before { content: "${item}" } `;
    });

    var result = '';
    result += [
        '',
        '<div class="table-wrap">',
        `<style>${style}</style>`,
        `<table class="${name}">`,
        '<thead>',
        header,
        '</thead>',
        '<tbody>',
        body,
        '</tbody>',
        '</table>',
        '</div>',
        '',
    ].join('\n');

    return result;
}

module.exports = renderer;