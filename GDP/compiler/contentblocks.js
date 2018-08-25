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
                    (title ? `<h5 class="post-${name}-title">${title}</h5>\n` : ``) +
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

function rightImg(content, attributes) {
    return `<div class="right-image">\n` +
                `<img src="${src}" title="${title}" />\n` +
            `</div>`
}

function quiz(content, attributes) {
    return `<div class="quiz">\n` +
                `<h2 class="quiz-title"><i class="fas fa-question-circle"></i> Quiz</h2>\n` +
                content + '\n' +
            `</div>`
}

function quizTitle(content, attributes) {
    var firstPeriodPos = content.indexOf('.');
    var name = content.substr(0, firstPeriodPos).trim();
    var explanation = content.substr(firstPeriodPos + 1).trim();

    return `<h3 class="quiz-section-title">\n` +
                `<span class="quiz-section-name">${name}</span> ${explanation}\n` +
            `</h3>\n`
}

function ox(content, attributes) {
    return `<div class="ox-wrap">\n` +
                content + '\n' +
            `</div>`
}

function oxq(content, attributes) {
    return `<div class="ox-question">\n` +
                `<span class="ox-sign">Q. </span>${content}\n` +
            `</div>`
}

function quizBreak(content, attributes) {
    return `<div class="quiz-section-break">\n` +
                `<span class="outer-line"></span><i class="fas fa-book-open"></i><span class="outer-line"></span>\n` +
            `</div>`
}

var answerID = 0;
function answer(content, attributes) {
    answerID++;
    return `<div class="answer">\n` +
                `<button class="show-answer" data-answer-div="answer-div-${answerID}"><i class="fas fa-angle-double-right"></i> Show Answer</button>\n` +
                `<div id="answer-div-${answerID}" class="hide">\n` +
                    `<h4 class="answer-head">Answer</h4>\n` +
                        content + '\n' +
                `</div>\n` +
            `</div>`
}

function oxa(content, attributes) {
    answerID++;
    return `<div class="answer">\n` +
                `<button class="show-answer" data-answer-div="answer-div-${answerID}"><i class="fas fa-angle-double-right"></i> Show Answer</button>\n` +
                `<div id="answer-div-${answerID}" class="hide">\n` +
                    `<span class="ox-sign">A. </span>\n` +
                        content + '\n' +
                `</div>\n` +
            `</div>`
}

const prism = require('prismjs');
var loadLanguages = require('prismjs/components/index.js');
loadLanguages(['csharp', 'typescript']);

var codes = []

function code(content, attributes) {
    var language = attributes['lang'] ? attributes['lang'] : 'csharp';
    var langName = {
        'csharp': 'C#',
        'javascript': 'JavaScript',
        'typescript': 'TypeScript',
    }
    if (attributes['title']) {
        template = '\n<div class="code-snippet">\n' +
            '<div class="code-snippet-title-wrap">\n' +
                `\t<div class="code-snippet-${language}">${langName[language]}</div>\n` +
                `\t<div class="code-snippet-title">${attributes['title']}</div>\n` +
            '</div>\n' +
            `<pre class="language-${language}"><code class="language-${language}">` + 
                prism.highlight(content, prism.languages[language], language).trim() +
            '</code></pre>\n' +
        '</div>\n';
    } else {
        template = 
            `\n<pre class="language-${language}"><code class="language-${language}">` + 
                prism.highlight(content, prism.languages[language], language).trim() +
            '</code></pre>\n'
    }

    codes.push(template);

    return '<code-block>';
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
addContentBlock('RightImg', rightImg);
addContentBlock('Quiz', quiz);
addContentBlock('OX', ox);
addContentBlock('Q', oxq);
addContentBlock('OXQ', oxq);
addContentBlock('QTitle', quizTitle);
addContentBlock('QuizBreak', quizBreak);
addContentBlock('Answer', answer);
addContentBlock('A', oxa);
addContentBlock('OXA', oxa);
addContentBlock('Code', code);

function compileBlock(post) {
    return post.replace(
        /\[([^\]]+?)\s*([^\]]*?)?\]([\s\S]*?)\[\/\1\]/g, 
        render
    )
}

function compileSelfClosingBlock(post) {
    return post.replace(
        /\[([^\]]+?)\s*([^\]]*?)?\/\]/g, 
        (match, name, attributes) => {
            return render(match, name, attributes, '');
        }
    )
}

function render(match, name, attributes, content) {
    var renderer = blocks[name]
    if (!renderer) {
        console.log('Error: ' + match.substr(0, 50));
        return '';
    }
    return renderer(compileBlock(content), attributeObject(attributes));
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

function compileLine(post) {
    return post.replace(
        /([a-zA-Z0-9]+)>>([^\n]+)\n/g, 
        (match, name, content) => {
            return render(match, name, '', content)
        }
    )
}

function preMarkdown(post) {
    post = compileLine(post);
    post = compileSelfClosingBlock(post);
    post = compileBlock(post);

    return post;
}

function responsiveBreak(post) {
    return post.replace(/\$br /g, '<br class="responsive-break">');
}

function replaceCodeBlocks(post) {
    var i = 0;
    return post.replace(/<code-block>/g, function(match) {
        return codes[i++];
    })
}

function postMarkdown(post) {
    post = responsiveBreak(post);
    post = replaceCodeBlocks(post);

    return post;
}

module.exports = {
    preMarkdown,
    postMarkdown,
}
