const fs = require('fs');
var markdown = require('./markdown')

var blocks = {};

function addContentBlock(name, renderer) {
    blocks[name] = renderer;
}

function getContentBlock(name) {
    return blocks[name];
}

function contentBlock(content, attributes) {
    return `<div class="content-block ${attributes['color'] == 'grey' ? 'bg-grey' : ''}">\n` +
                '\n' + content + '\n' +
            `</div>\n`;
}

var toc = [];
function chapterTitle(content, attributes) {
    var number = attributes['number'];
    toc.push({
        number,
        content,
    })
    return `<div class="post-chapter-title-wrap" id="chap-${number}">\n` +
                `\t<div class="post-chapter-number">Chapter ${number}</div>\n` +
                `\t<h2 class="post-chapter-title">${content}</h2>\n` +
            `</div>\n`
}

var sectionToc = [];
function sectionTitle(content, attributes) {
    var number = attributes['number'];
    sectionToc.push({
        number,
        content,
    });
    return `<div class="post-section-title-wrap" id="section-${number}">\n` +
                `\t<div class="post-section-number">Section ${number}</div>\n` +
                `\t<h2 class="post-section-title">${content}</h2>\n` +
            `</div>\n`
}

function key(content, attributes) {
    var keys = content.split('+');

    var result = '';

    for(var i = 0; i < keys.length; i++) {
        if(keys[i].includes(',')) {
            var keylist = keys[i].split(',');

            for(var j = 0; j < keylist.length; j++) {
                result += `<span class="key">${keylist[j].trim()}</span>`;

                if (j < keylist.length - 1) {
                    result += ' , ';
                }
            }
        } else {
            result += `<span class="key">${keys[i].trim()}</span>`;
        }

        if (i != keys.length - 1) {
            result += ' + ';
        }
    }

    return result;
}

function upArrow(content, attributes) {
    return `<span class="key"><i class="fas fa-arrow-up"></i></span>`;
}

function downArrow(content, attributes) {
    return `<span class="key"><i class="fas fa-arrow-down"></i></span>`;
}

function button(content, attributes) {
    return `<span class="button">${content}</span>`;
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

function errorQuote(content, attributes) {
    return `<blockquote class="error-quote">\n`
                + content + '\n' +
            `</blockquote>`
}

function step(content, attributes) {
    return `<div class="step">\n` + 
                `<div class="step-number">${attributes['number']}</div>\n` +
                `<div class="step-text">${markdown(content)}</div>\n` +
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
                `<span class="ox-sign">Q. </span>${removeP(markdown(content))}\n` +
            `</div>`
}

function quizBreak(content, attributes) {
    return `<div class="quiz-section-break">\n` +
                `<span class="outer-line"></span><i class="fas fa-book-open"></i><span class="outer-line"></span>\n` +
            `</div>`
}

function contentBreak(content, attributes) {
    return `<div class="content-break">\n` +
                `<i class="fas fa-asterisk"></i><i class="fas fa-asterisk"></i><i class="fas fa-asterisk"></i><i class="fas fa-asterisk"></i>\n` +
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
                    removeP(markdown(content)) + '\n' +
                `</div>\n` +
            `</div>`
}

const codeblock = require('./codeblock');

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
            codeblock(content, language, attributes['line']) +
        '</div>\n';
    } else {
        template = codeblock(content, language, attributes['line']);
    }

    codes.push(template);

    return '<code-block>';
}


function signupBox(content, attributes) {
    var { title, icon, color, modalID } = attributes;
    color = color ? color : 'bg-light-blue';
    return `
<div class="signup-box ${color}">
    <h4 class="signup-box-title">${title}</h4>
    <div class="signup-box-contents">
        <div class="left">
            <i class="fas ${icon}"></i>
        </div>
        <div class="right">
            ${autoP(content)}
            <div><button class="signup-button" data-modal-id="${modalID}">Download now</button></div>
        </div>
    </div>
</div>
    `
}

function modal(content, attributes) {
    var { title, src, id, noFooter } = attributes;
    noFooter = noFooter ? noFooter : false;
    var footer = 
        noFooter ? 
        '' : 
        `<footer>
            <a href="/why-signup">Can't you give me this without signing up?</a>
        </footer>`;

    return `
<div id="${id}" class="modal-container cancel-modal">
    <div class="modal">
        <header class="modal-header">
            <div class="modal-progress">
                <div class="modal-progress-content"></div>
            </div>
            <div class="modal-notice">
                Almost there! Please fill out the form below and press the button to get instant access.
            </div>
        </header>
        <div class="modal-main">
            <div class="download-image">
                <img src="${src}" />
            </div>
            <div class="modal-form">
                <h4 class="modal-title">${title}</h4>
                <form action="https://app.convertkit.com/forms/749433/subscriptions" class="seva-form formkit-form" method="post"  data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;redirect&quot;,&quot;success_message&quot;:null,&quot;redirect_url&quot;:&quot;https://unitycook.com/one-more-thing-to-do&quot;},&quot;modal&quot;:{&quot;trigger&quot;:null,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:null,&quot;devices&quot;:null,&quot;show_once_every&quot;:null},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:null},&quot;slide_in&quot;:{&quot;display_in&quot;:null,&quot;trigger&quot;:null,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:null,&quot;devices&quot;:null,&quot;show_once_every&quot;:null}}}">
                    <input type="text" name="first_name" class="field" placeholder="your first name" required/>
                    <input type="email" name="email_address" class="field" placeholder="your@best-email.com" required/>
                    <input type="submit" class="button" value="Send them now" />
                </form>
            </div>
        </div>
        ${footer}
</div>
</div>
    `
}

function modalLink(content, attributes) {
    return `<a href="#" class="modal-link" data-modal-id="${attributes['modalID']}">${content}</a>`;
}

function center(content, attributes) {
    return `<div class="text-center">${content}</div>`
}

function rememberThis(content, attributes) {
    return `<div class="featured-snippet remember-this">` +
                `<div class="featured-snippet-name"><i class="fas fa-brain"></i> Remember This</div>` +
                `<h3 class="featured-snippet-title">${attributes['title']}</h3>` +
                markdown(content) +
            `</div>`;
}

function codingRecipe(content, attributes) {
    return `<div class="featured-snippet codind-recipe">` +
                `<div class="featured-snippet-name"><i class="fas fa-coffee"></i> Coding Recipe</div>` +
                `<h3 class="featured-snippet-title">${attributes['title']}</h3>` +
                markdown(content) +
            `</div>`;
}

function overachiever(content, attributes) {
    return `<div class="overachiever">` +
                `<h2 class="overachiever-title"><i class="fas fa-fire"></i> For overachievers: </h2>` +
                content +
            `</div>`;
}

function contentCard(content, attributes) {
    var arr = content.trim().split('====');
    var arr2 = arr[0].trim().split('\n');

    var title = arr2[0];
    var link = arr2[1]
    var img = arr2[2];
    var summary = arr[1];

    return `<div class="content-card">\n\n` +
                `![Thumbnail image for ${title}](${img})\n` +
                `<h3 class="content-card-title"><a href="${link}">${title}</a></h3>` + 
                `<div class="summary">${markdown(summary)}</div>` +
            `</div>`;
}

var fbQuestionNumber = 1;
function fillBlanks(content, attributes) {
    var questionID = fbQuestionNumber++;
    var arr = content.split('====');
    var question = arr[0];
    var answers = [];

    question = question.replace(/____([0-9]+)/g, '$$$$$1');

    var codes = [];
    question = question.replace(/```([\s\S]*?)```/g, function(match, code) {
        code = code.replace(/\$\$([0-9]+)/g, '__blank$1');
        code = markdown('```'+code+'```');
        code = code.replace(/__blank([0-9]+)/g, '$$$$$1');
        codes.push(code);

        return '<dummy>'
    })
    question = markdown(question);
    
    var codeIndex = 0;
    question = question.replace('<dummy>', function(match) {
        return codes[codeIndex++];
    });

    var bid = 1;
    question = question.replace(/\$\$([0-9]+)/g, function(match, number) {
        answers.push(parseInt(number));
        return `<span class="blank" data-answer="fb${questionID}-${number}" data-bid="b${bid++}"></span>`;
    });

    var lines = arr[1].trim().split('\n');
    var choices = []
    var explanations = []

    var choiceNumber = 0;
    var blankNumber = 0;
    lines.forEach(line => {
        if (line.startsWith('*') || line.startsWith('!')) {
            choiceNumber++;
            blankNumber = 0;
            choices.push({
                choiceNumber,
                content: line.substr(2),
            })
        } else if (line.startsWith('>>')) {
            blankNumber++;
            explanations.push({
                choiceNumber,
                blankNumber,
                content: line.substr(3),
                answer: answers[blankNumber - 1] == choiceNumber,
            })
        } else {
            var lastIndex = explanations.length - 1;
            explanations[lastIndex].content += ('\n' + line.substr(3));
        }
    })


    return `<div class="fill-blanks">\n` +
                `<div class="fill-blanks-question" data-qid="fb${questionID}">\n` +
                    question +
                `</div>\n` +
                `<div class="fill-blanks-choices">\n` +
                    choices.map(choice => {
                        var { choiceNumber, content } = choice;
                        return `<div id="fb${questionID}-${choiceNumber}" class="fill-blanks-choice" draggable="true">${content}</div>`;
                    }).join('\n') +
                `</div>\n` +
                `<div id="fb${questionID}-hint" class="fill-blanks-hint">\n` +
                `</div>\n` +
                `<div class="fill-blanks-explanations">\n` +
                    explanations.map(exp => {
                        var { choiceNumber, blankNumber, content, answer } = exp;
                        return `<div id="fb${questionID}-${choiceNumber}-b${blankNumber}" class="fill-blanks-explanation ${answer ? "correct":"wrong"}">${content}</div>`;
                    }).join('\n') + 
                `</div>\n` +
            `</div>`;
}

function seriesTOC(content, attributes) {
    var name = attributes['name'];
    var id = attributes['id'];
    var json = fs.readFileSync(`./compiler/toc/${name}.json`).toString();
    var chapters = JSON.parse(json);
    return `<div class="series-toc">` +
                `<div class="series-toc-title">` +
                    `<div class="series-toc-name">Table of Contents</div>` +
                    `<div class="series-toc-current-chapter">${chapters[id].number}. ${chapters[id].title}</div>` +
                    `<div class="series-toc-see-all-chapters"><a class="see-all-chapters" href="#">See all chapters</a></div>` +
                `</div>` +
                `<div class="series-toc-all-chapters">` +
                    ( chapters.order.parts ?
                        chapters.order.list.map((part, index) => {
                            return `<div class="series-toc-part">` +
                                        `<div class="series-toc-part-name">Part ${index + 1}. ${part.name}</div>` +
                                        _chapters(chapters, part.list) +
                                    `</div>`
                                    }).join('\n')
                        :
                        _chapters(chapters, chapters.order.list)
                    ) +
                `</div>` +
                `<div class="series-toc-sections">` +
                    `<div class="series-toc-sections-chapter-title">${chapters[id].number} Contents</div>` +
                    `<SectionTOC />` +
                `</div>` +
            `</div>`;
}

function _chapters(chapters, list) {
    return `<div class="series-toc-chapters">` +
                list.map(id => {
                    var chapter = chapters[id];
                    return `<a class="series-toc-chapter" href="${chapter.url}">` + 
                                `<img class="series-toc-chapter-icon" src="${chapter.icon}" />` +
                                `<span class="series-toc-chapter-number">${chapter.number}</span>` +
                                `<span class="series-toc-chapter-text">${chapter.title}</span>` +
                            `</a>`
                }).join('\n') +
            `</div>`

}

addContentBlock('ContentBlock', contentBlock);
addContentBlock('ChapterTitle', chapterTitle);
addContentBlock('SectionTitle', sectionTitle);
addContentBlock('Key', key);
addContentBlock('UpArrow', upArrow);
addContentBlock('DownArrow', downArrow);
addContentBlock('Button', button);
addContentBlock('Title', title);
addContentBlock('Console', consoleBlock);
addContentBlock('Goto', goto);
addContentBlock('Note', note);
addContentBlock('Tip', tip);
addContentBlock('ErrorQuote', errorQuote);
addContentBlock('Step', step);
addContentBlock('RightImg', rightImg);
addContentBlock('Quiz', quiz);
addContentBlock('OX', ox);
addContentBlock('Q', oxq);
addContentBlock('OXQ', oxq);
addContentBlock('QTitle', quizTitle);
addContentBlock('QuizBreak', quizBreak);
addContentBlock('ContentBreak', contentBreak);
addContentBlock('Answer', answer);
addContentBlock('A', oxa);
addContentBlock('OXA', oxa);
addContentBlock('Code', code);
addContentBlock('Modal', modal);
addContentBlock('SignupBox', signupBox);
addContentBlock('ModalLink', modalLink);
addContentBlock('Center', center);
addContentBlock('RememberThis', rememberThis);
addContentBlock('CodingRecipe', codingRecipe);
addContentBlock('Overachiever', overachiever);
addContentBlock('ContentCard', contentCard);
addContentBlock('FillBlanks', fillBlanks);
addContentBlock('SeriesTOC', seriesTOC);

function appendSpace(post) {
    return post.replace(
        /\[([^\]]+?)\]/g,
        function(match, name) {
            if (blocks[name]) {
                return `[${name} ]`;
            }
            return match;
        }
    )
}

function compileBlock(post) {
    return post.replace(
        /\[([^\]]+?)\s+([^\]]*?)?\]([\s\S]*?)\[\/\1\]/g, 
        render
    )
}

function compileSelfClosingBlock(post) {
    return post.replace(
        /\[([^\]]+?)\s+([^\]]*?)?\/\]/g, 
        (match, name, attributes) => {
            return `[${name} ${attributes}][/${name}]`;
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
            return `[${name}]${content.trim()}[/${name}]\n`;
        }
    )
}

function preMarkdown(post) {
    post = compileLine(post);
    post = compileSelfClosingBlock(post);
    post = appendSpace(post);
    post = compileBlock(post);

    return post;
}

function responsiveBreak(post) {
    return post.replace(/\$br ?/g, '<br class="responsive-break">');
}

function replaceCodeBlocks(post) {
    var i = 0;
    return post.replace(/<code-block>/g, function(match) {
        return codes[i++];
    })
}

function decorateCode(post) {
    return post.replace(/\$b (.+?) \$b/g, function(match, p1) {
        return `<strong class="code-deco">${p1}</strong>`;
    });
}

function addTOC(post) {
    return post.replace('<TOC />', function(m) {
        return '<h2 class="text-center">Table of Contents</h2>' +
        '<div class="toc">\n' +
        toc.map(chapter => {
            return `<a href="#chap-${chapter.number}">Chapter ${chapter.number}. ${chapter.content}</a><br>`
        }).join('\n') +
        '</div>';
    })
}


function addSectionTOC(post) {
    return post.replace('<SectionTOC />', function(m) {
        return `<div class="toc">\n` +
            sectionToc.map(section => 
                `<a href="#section-${section.number}">Section ${section.number}. ${section.content}</a><br>`
            ).join('\n') +
        '</div>';
    })
}

function postMarkdown(post) {
    post = replaceCodeBlocks(post);
    post = responsiveBreak(post);
    post = decorateCode(post);
    post = addTOC(post);
    post = addSectionTOC(post);

    return post;
}

function autoP(post) {
    post = post.replace(/\r\n/g, '\n');
    var lines = post.split('\n');

    return lines.map((line) => { 
        return `<p>${line}</p>`
    }).join('');
}

function removeP(post) {
    const countP = (str) => {
        const re = /<p>/g
        return ((str || '').match(re) || []).length
    }

    if(countP(post) > 1) {
        return post;
    }

    return post.replace(/<\/?p>/g, '');
}

module.exports = {
    preMarkdown,
    postMarkdown,
    addContentBlock,
    getContentBlock,
}
