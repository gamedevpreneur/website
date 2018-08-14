const tokenize = require('../tokenizer')
const resetLineNumber = require('../tokenizer/scanners').resetLineNumber

var testCases = [
    ['What is **better**?', [
        ['WORD', 'What', 1],
        ['SPACE', ' ', 1],
        ['WORD', 'is', 1],
        ['SPACE', ' ', 1],
        ['DOUBLE_STAR', '**', 1],
        ['WORD', 'better', 1],
        ['DOUBLE_STAR', '**', 1],
        ['WORD', '?', 1],
    ] ],

    ['[content  color="grey"]\n Hello, World! \n  [/content]\n', [
        ['BRACKET_LEFT', '[', 1],
        ['WORD', 'content', 1],
        ['SPACE', '  ', 1],
        ['WORD', 'color', 1],
        ['EQUAL', '=', 1],
        ['DOUBLE_QUOTE', '"', 1],
        ['WORD', 'grey', 1],
        ['DOUBLE_QUOTE', '"', 1],
        ['BRACKET_RIGHT', ']', 1],
        ['NEW_LINE', '\n', 1],
        ['SPACE', ' ', 2],
        ['WORD', 'Hello,', 2],
        ['SPACE', ' ', 2],
        ['WORD', 'World', 2],
        ['EXCLAMATION', '!', 2],
        ['SPACE', ' ', 2],
        ['NEW_LINE', '\n', 2],
        ['SPACE', '  ', 3],
        ['BRACKET_LEFT', '[', 3],
        ['SLASH', '/', 3],
        ['WORD', 'content', 3],
        ['BRACKET_RIGHT', ']', 3],
        ['NEW_LINE', '\n', 3],
    ]]
]

testCases.forEach(testCase => {
    var testText = testCase[0];
    var expectedResult = testCase[1];

    resetLineNumber();

    test(`tokenize(${testText}) returns correct tokens.`, () => {
        var tokens = tokenize(testText);

        expectedResult.forEach((token, i) => {
            expect(tokens[i].type).toBe(token[0])
            expect(tokens[i].content).toBe(token[1])
            expect(tokens[i].lineNumber).toBe(token[2])
        })
    })

    test(`tokenize(${testText}) returns correct number of tokens.`, () => {
        var tokens = tokenize(testText);

        expect(tokens.length).toBe(expectedResult.length);
    })
})

