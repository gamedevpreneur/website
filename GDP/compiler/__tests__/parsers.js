const parsers = require('../parser/parsers');
const plainTextParser = parsers.plainTextParser;
const decoratedTextParser = parsers.decoratedTextParser;
const urlParser = parsers.urlParser;
const linkParser = parsers.linkParser;

describe('textParser() tests', () => {
    var testTokens = [
        [
            [
                { type: 'WORD', content: 'Hello,'},
                { type: 'SPACE', content: ' '},
                { type: 'WORD', content: 'world!'},
                { type: 'SPACE', content: ' '},
                { type: 'WORD', content: 'is'},
                { type: 'SPACE', content: ' '},
                { type: 'WORD', content: 'not'},
                { type: 'SPACE', content: ' '},
                { type: 'WORD', content: 'good'},
                { type: 'SPACE', content: ' '},
            ],
            { type:'Text', content: 'Hello, world! is not good '},
        ],
    ]

    testTokens.forEach(testCase => {
        var testCaseTokens = testCase[0]
        var testResult = testCase[1]

        test(`textParser() returns correct node`, () => {
            expect(plainTextParser(testCaseTokens, 0)).toEqual({
                node: testResult,
                consumed: testCaseTokens.length,
            })
        })
    })
})

describe('decoratedText() tests', () => {
    var testCases = [
        [
            [
                { type: 'STAR', content: '*' },
                { type: 'WORD', content: 'His'},
                { type: 'SPACE', content: ' '},
                { type: 'WORD', content: 'World'},
                { type: 'STAR', content: '*' },
            ],
            { type: 'Italic', content: 'His World' },
        ],
        [
            [
                { type: 'UNDERSCORE', content: '_' },
                { type: 'WORD', content: 'Your'},
                { type: 'SPACE', content: ' '},
                { type: 'WORD', content: 'World'},
                { type: 'UNDERSCORE', content: '_' },
            ],
            { type: 'Italic', content: 'Your World' },
        ],
        [
            [
                { type: 'DOUBLE_STAR', content: '**' },
                { type: 'WORD', content: 'His'},
                { type: 'SPACE', content: ' '},
                { type: 'WORD', content: 'Tool'},
                { type: 'SPACE', content: ' '},
                { type: 'DOUBLE_STAR', content: '**' },
            ],
            { type: 'Bold', content: 'His Tool ' },
        ],
        [
            [
                { type: 'DOUBLE_UNDERSCORE', content: '__' },
                { type: 'WORD', content: 'Your'},
                { type: 'SPACE', content: ' '},
                { type: 'WORD', content: 'Tool'},
                { type: 'SPACE', content: ' '},
                { type: 'DOUBLE_UNDERSCORE', content: '__' },
            ],
            { type: 'Bold', content: 'Your Tool ' },
        ],
        [
            [
                { type: 'DOUBLE_TILDE', content: '~~' },
                { type: 'WORD', content: 'His'},
                { type: 'SPACE', content: ' '},
                { type: 'WORD', content: 'Job'},
                { type: 'SPACE', content: ' '},
                { type: 'WORD', content: 'Awesome'},
                { type: 'DOUBLE_TILDE', content: '~~' },
            ],
            { type: 'StrikeThrough', content: 'His Job Awesome' },
        ],
    ]

    testCases.forEach(testCase => {
        var testTokens = testCase[0];
        var testResult = testCase[1];

        test(`decoratedTextParser() returns correct result`, () => {
            expect(decoratedTextParser(testTokens, 0)).toEqual({
                node: testResult,
                consumed: testTokens.length,
            })
        })
    })
})


describe('linkParser() tests', () => {
    var testTokens = [
        [
            [
                { type: 'BRACE_LEFT', content: '['},
                { type: 'WORD', content: 'Hello,'},
                { type: 'SPACE', content: ' '},
                { type: 'WORD', content: 'world!'},
                { type: 'BRACE_RIGHT', content: ']'},
                { type: 'PARENTHESES_LEFT', content: '('},
                { type: 'SLASH', content: '/'},
                { type: 'WORD', content: 'hello'},
                { type: 'PARENTHESES_RIGHT', content: ')'},
            ],
            { 
                type: 'Link', 
                nodes: {
                    text: { type: 'Text', content: 'Hello, world!' },
                    url: { type: 'Url', content: '/hello' },
                },
            },
        ], 
    ];

    testTokens.forEach(testCase => {
        var testCaseTokens = testCase[0]
        var testResult = testCase[1]

        test(`linkParser() returns correct nodes`, () => {
            expect(linkParser(testCaseTokens, 0)).toEqual({
                node: testResult,
                consumed: testCaseTokens.length,
            })
        })
    })

    var errorTokens1 = [
        { type: 'WORD', content: 'great', },
        { type: 'SPACE', content: ' '},
        { type: 'WORD', content: 'content', },
    ];

    test(`linkParser() returns null when the first token isn't BRACE_LEFT`, () => {
        expect(linkParser(errorTokens1, 0)).toEqual({
            node: null,
            consumed: 0,
        })
    })
})

describe('urlParser() tests', () => {
    var testTokens = [
        [
            [
                { type: 'SLASH', content: '/' },
                { type: 'WORD', content: 'hello'},
                { type: 'MINUS', content: '-'},
                { type: 'WORD', content: 'good'},
                { type: 'SLASH', content: '/' },
                { type: 'WORD', content: 'world'},
                { type: 'SLASH', content: '/' },
            ],
            {
                type: 'Url',
                content: '/hello-good/world/'
            }
        ]
    ]

    testTokens.forEach(testCase => {
        var testCaseTokens = testCase[0]
        var testResult = testCase[1]

        test(`urlParser() returns correct nodes`, () => {
            expect(urlParser(testCaseTokens, 0)).toEqual({
                node: testResult,
                consumed: testCaseTokens.length,
            })
        })
    })
})

describe('sentenceParser() tests', () => {
    
})