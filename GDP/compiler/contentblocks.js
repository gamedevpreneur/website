var marked = require('marked');
marked.setOptions({
    breaks: true,
})

var blocks = {};

function addContentBlock(name, renderer) {
    blocks[name] = renderer;
}

function contentBlock(content, attributes) {
    return `<div class="content-block ${attributes['color'] == 'grey' ? 'bg-grey' : ''}">\n` +
                '\n' + content + '\n' +
            `</div>\n`;
}

function chapterTitle(content, attributes) {
    return `<div class="post-chapter-title-wrap">\n` +
                `\t<div class="post-chapter-number">Chapter ${ attributes['number'] }</div>\n` +
                `\t<h2 class="post-chapter-title">${content}</h2>\n` +
            `</div>\n`
}

function key(content, attributes) {
    var keys = content.split('+');

    var result = '';

    for(var i = 0; i < keys.length; i++) {
        result += `<span class="key">${keys[i].trim()}</span>`;
        if (i != keys.length - 1) {
            result += ' + ';
        }
    }

    return result;
}

function title(content, attributes) {
    return `<div class="content-block"><h1 class="post-title">${content}</h1></div>`;
}

function consoleBlock(content, attributes) {
    var title = attributes['title'] ? attributes['title'] : 'Console Window';
    return `<div class="console-window">\n` +
                `<div class="console-title">\n` +
                    `<i class="fas fa-terminal window-icon">\n` +
                    `</i><span>${title}</span>\n`+
                    `<i class="fas fa-times close-icon"></i>\n` +
                `</div>\n` +
                `<div class="console-content">\n` +
                    `<pre>${content}</pre>\n` +
                `</div>\n` +
            '</div>\n'
}

function goto(content, attributes) {
    return `<div class="goto">\n` +
                `<i class="fas fa-arrow-circle-right"></i><a href="${attributes['href']}">${content}</a>\n` +
            `</div>\n`
}

function note(content, attributes) {
    return box('note', content, attributes);
}

function tip(content, attributes) {
    return box('tip', content, attributes);
}

function box(name, content, attributes) {
    var title = attributes['title'];
    return `<div class="post-${name}">\n` +
                `<div class="post-${name}-title-area">\n`+
                    `<span class="post-${name}-name"><i class="fas fa-pen box-icon"></i>${name}</span>\n`+
                    title ? `<h5 class="post-${name}-title">${title}</h5>\n` : `` +
                `</div>\n` +
                `<div class="post-${name}-content">\n` +
                    content +
                `</div>\n` +
            `</div>\n`
}

function step(content, attributes) {
    return `<div class="step">\n` + 
                `<div class="step-number">${attributes['number']}</div>\n` +
                `<div class="step-text">${content}</div>\n` +
            `</div>\n`
}


addContentBlock('ContentBlock', contentBlock);
addContentBlock('ChapterTitle', chapterTitle);
addContentBlock('Key', key);
addContentBlock('Title', title);
addContentBlock('Console', consoleBlock);
addContentBlock('Goto', goto);
addContentBlock('Note', note);
addContentBlock('Tip', tip);
addContentBlock('Step', step);


function compileBlock(post) {
    return post.replace(
        /\[([^\]]+?)\s*([^\]]*?)?\]([\s\S]*?)\[\/\1\]/g, 
        (match, name, attributes, content) => {
            var renderer = blocks[name]
            if (!renderer) {
                console.log('Error: ' + match.substr(0, 50));
                return '';
            }
            return blocks[name](compileBlock(content), attributeObject(attributes));
        }
    )
}

function attributeObject(attributes) {
    if(!attributes) return {};

    attributes = attributes.trim();

    var obj = {};
    var re = /(.+?)="(.*?)"\s?/g;

    var m;
    do {
        m = re.exec(attributes); 
        if (m) {
            obj[m[1]] = m[2];
        }
    } while (m);

    return obj;
}

module.exports = {
    compileBlock,
}
