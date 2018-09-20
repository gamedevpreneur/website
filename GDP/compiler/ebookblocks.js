const { addContentBlock, getContentBlock } = require('./contentblocks');

var answers = [];

var originalQuiz = getContentBlock('Quiz');
function quiz(content, attributes) {
    var result = originalQuiz(content, attributes) + 
    `
<div class="ebook-quiz-answers">
    <h4 class="answer-head">Answers</h4>
    ${answers.join('\n')}
</div>
    `
    answers = [];

    return result;
}

var originalQuizTitle = getContentBlock('QTitle');
function quizTitle(content, attributes) {
    var qtitle = originalQuizTitle(content, attributes)
    answers.push(qtitle);
    return qtitle;
}

function answer(content, attributes) {
    answers.push(content + '<br><br>');
    return '';
}

function oxa(content, attributes) {
    answers.push(`<div class="ebook-oxa">* ${content}</div>`);
    return '';
}

module.exports = () => {
    addContentBlock('Quiz', quiz);
    addContentBlock('Answer', answer);
    addContentBlock('OXA', oxa);
    addContentBlock('A', oxa);
    addContentBlock('QTitle', quizTitle)
}