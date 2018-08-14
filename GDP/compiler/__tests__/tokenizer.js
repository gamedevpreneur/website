const tokenize = require('../tokenizer')

var testCases = [
    ['What is **better**?', [
        ['WORD', 'What'],
        ['SPACE', ' '],
        ['WORD', 'is'],
        ['SPACE', ' '],
        ['DOUBLE_STAR', '**'],
        ['WORD', 'better'],
        ['DOUBLE_STAR', '**'],
        ['WORD', '?'],
    ] ],

    ['[content  color="grey"]\n Hello, World! \n  [/content]\n', [
        ['BRACKET_LEFT', '['],
        ['WORD', 'content'],
        ['SPACE', '  '],
        ['WORD', 'color'],
        ['EQUAL', '='],
        ['DOUBLE_QUOTE', '"'],
        ['WORD', 'grey'],
        ['DOUBLE_QUOTE', '"'],
        ['BRACKET_RIGHT', ']'],
        ['NEW_LINE', '\n'],
        ['SPACE', ' '],
        ['WORD', 'Hello,'],
        ['SPACE', ' '],
        ['WORD', 'World'],
        ['EXCLAMATION', '!'],
        ['SPACE', ' '],
        ['NEW_LINE', '\n'],
        ['SPACE', '  '],
        ['BRACKET_LEFT', '['],
        ['SLASH', '/'],
        ['WORD', 'content'],
        ['BRACKET_RIGHT', ']'],
        ['NEW_LINE', '\n'],
    ]]
]

testCases.forEach(testCase => {
    var testText = testCase[0];
    var expectedResult = testCase[1];

    test(`tokenize(${testText}) returns correct tokens.`, () => {
        var tokens = tokenize(testText);

        expectedResult.forEach((token, i) => {
            expect(tokens[i].type).toBe(token[0])
            expect(tokens[i].content).toBe(token[1])
        })
    })

    test(`tokenize(${testText}) returns correct number of tokens.`, () => {
        var tokens = tokenize(testText);

        expect(tokens.length).toBe(expectedResult.length);
    })
})

