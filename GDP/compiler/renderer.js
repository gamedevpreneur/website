const markdown = require('marked');
const he = require('he');
var sizeOf = require('image-size');
const prism = require('./prism');
const codeblock = require('./codeblock');

const renderer = new markdown.Renderer();

renderer.heading = function(text, level) {
    level = level + 2;
    var tagName = `h${level}`;
    var className = {}
    className[3] = 'subhead';
    className[4] = 'sectionhead';

    var id = '';
    if (text.includes(';;;')) {
        var arr = text.split(';;;');
        text = arr[0].trim();
        id = arr[1].trim();
    }
    return `<${tagName} class="${className[level]}" ${id ? `id="${id}"` : ""}>${text}</${tagName}>\n\n`;
}

renderer.code = function(code, language, escaped) {
    language = language ? language : 'csharp';
    return codeblock(code, language);
}

renderer.codespan = function(code) {
    code = he.decode(code);
    var compiledCode = prism.highlight(code, prism.languages.csharp, 'csharp').trim()
    if (compiledCode[0] != '<' && compiledCode[compiledCode.length - 1] != '>') {
        compiledCode = `<span class="code-name">${compiledCode}</span>`;
    }
    return `<code class="language-csharp inline-code">${compiledCode}</code>`;
}

renderer.link = function(href, title, text) {
    if (href[0] == '#') {
        return `<a href="${href}"${title ? ` title="${title}"`:''}>${text}</a>`;
    } else if (href[0] == '/') {
        href = 'https://unitycook.com' + href;
    } else{
        text = text + `<i class="fas fa-external-link-alt"></i>`;
    }
    return `<a href="${href}"${title ? ` title="${title}"`:''} target="_blank">${text}</a>`
}

renderer.image = function(href, title, text) {
    var height, width;
    if (!href.startsWith('http')) {
        var result = sizeOf('./public/' + href);
        height = `width="${result.height}`;
        width = `height="${result.width}`;
    }

    return  `<figure class="post-image-wrap">\n` +
                `<img class="lazyload" data-src="${href}" ${width ? width:''} ${height ? height:''} src="./img/now-loading.png" title="${title ? title:text}" alt="${text}" />\n` +
                ( title ? `<figcaption>${title}</figcaption>`: '' ) + 
            `</figure>`
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