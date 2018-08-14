const scanners = require('../tokenizer/scanners')
const scanLineBreak = scanners[0];
const scanMultiChar = scanners[1];
const scanSingleChar = scanners[2];
const scanText = scanners[3];

describe('scanLineBreak tests', () => {
    var testCases = [
        ['\n', [ ['NEW_LINE', '\n'], ] ],
        ['\n\n', [ ['NEW_LINE', '\n'], ['EMPTY_LINE', '\n'], ] ],
        ['\n\n\n', [ ['NEW_LINE', '\n'], ['EMPTY_LINE', '\n'], ['EMPTY_LINE', '\n'], ] ],
        ['\n   \n', [ ['NEW_LINE', '\n'], ['EMPTY_LINE', '\n'], ] ],
        
        ['\n*', [ ['NEW_LINE', '\n'], ['BULLET', '*'], ] ],
        ['\n+', [ ['NEW_LINE', '\n'], ['BULLET', '+'], ] ],
        ['\n-', [ ['NEW_LINE', '\n'], ['BULLET', '-'], ] ],

        ['\n *', [ ['NEW_LINE', '\n'], ['BULLET', ' *'], ] ],
        ['\n +', [ ['NEW_LINE', '\n'], ['BULLET', ' +'], ] ],
        ['\n -', [ ['NEW_LINE', '\n'], ['BULLET', ' -'], ] ],
        ['\n   \n -', [ ['NEW_LINE', '\n'], ['EMPTY_LINE', '\n'], ['BULLET', ' -'], ] ],
        
        ['\n#', [ ['NEW_LINE', '\n'], ['HEADING', '#'], ] ],
        ['\n##', [ ['NEW_LINE', '\n'], ['HEADING', '##'], ] ],
        ['\n  ###', [ ['NEW_LINE', '\n'], ['HEADING', '###'], ] ],//*/
    ]

    testCases.forEach((testCase, index) => {
        var testString = testCase[0];
        var expectedResult = testCase[1];

        test(`scanLineBreak(${testString.replace(/\n/g, '\\n')}, 0) returns correct tokens`, () => {
            var tokens = scanLineBreak(testString, 0);

            expect(tokens.length).toBe(expectedResult.length);

            expectedResult.forEach((token, i) => {
                expect(tokens[i].type).toBe(token[0])
                expect(tokens[i].content).toBe(token[1])
            })
        })
    })
})

describe('scanMultiChar tests', () => {
    var multiChars = [
        '*',
        '**',
        '`',
        '```',
        '_',
        '__',
    ]
    
    var multiCharTypes = [
        'STAR',
        'DOUBLE_STAR',
        'BACK_TICK',
        'TRIPLE_BACK_TICK',
        'UNDERSCORE',
        'DOUBLE_UNDERSCORE',
    ]
    
    multiChars.forEach((testChar, index) => {
        test(`scanMultiChar(${testChar}, 0) returns correct token`, () => {
            var result = scanMultiChar(testChar, 0)
            expect(result.type).toBe(multiCharTypes[index]);
            expect(result.content).toBe(testChar);
        })
    })

    var wrongMultiChars = [
        '***',
        '___',
        '****',
        '++',
        '``',
    ];

    wrongMultiChars.forEach((testChar, index) => {
        test(`scanMultiChar(${testChar}, 0) returns null`, () => {
            expect(scanMultiChar(testChar, 0)).toBeNull();
        })
    })

})

describe('scanSingleChar tests', () => {
    var chars = `[]{}()<>"'/=!`
    var charTypes = [
        'BRACKET_LEFT',
        'BRACKET_RIGHT',
        'BRACE_LEFT',
        'BRACE_RIGHT',
        'PARENTHESES_LEFT',
        'PARENTHESES_RIGHT',
        'ANGULAR_BRACKET_LEFT',
        'ANGULAR_BRACKET_RIGHT',
        'DOUBLE_QUOTE',
        'SINGLE_QUOTE',
        'SLASH',
        'EQUAL',
        'EXCLAMATION',
    ]

    for(let i = 0; i < chars.length; i++) {
        let testChar = chars[i]
        test(`scanSingleChar(${testChar}, 0) returns correct token`, () => {
            var result = scanSingleChar(testChar, 0)
            expect(result.type).toBe(charTypes[i]);
            expect(result.content).toBe(testChar);
        })
    }

    test('scanSingleChar("a", 0) returns null - Test for wrong case', () => {
        expect(scanSingleChar('a', 0)).toBeNull()
    })
})

describe('scanText tests', () => {
    var testCases = [
        ['Yes. C# is new to you.  ', [
            ['WORD', 'Yes.'],
            ['SPACE', ' '],
            ['WORD', 'C#'],
            ['SPACE', ' '],
            ['WORD', 'is'],
            ['SPACE', ' '],
            ['WORD', 'new'],
            ['SPACE', ' '],
            ['WORD', 'to'],
            ['SPACE', ' '],
            ['WORD', 'you.'],
            ['SPACE', '  '],
        ]],

        ['What is **better**?', [
            ['WORD', 'What'],
            ['SPACE', ' '],
            ['WORD', 'is'],
            ['SPACE', ' '],
        ]]
    ]

    testCases.forEach(testCase => {
        var testString = testCase[0];
        var expectedResult = testCase[1];

        test(`scanText(${testString}, 0) returns correct tokens`, () => {
            var tokens = scanText(testString, 0);

            expect(tokens.length).toBe(expectedResult.length);

            expectedResult.forEach((token, i) => {
                expect(tokens[i].type).toBe(token[0])
                expect(tokens[i].content).toBe(token[1])
            })
        })
    })

    test(`scanText("What is **better**?, 10) returns correct tokens`, () => {
        var tokens = scanText("What is **better**?", 10);

        expect(tokens[0].type).toBe('WORD');
        expect(tokens[0].content).toBe('better');
        expect(tokens.length).toBe(1);
    })

    test(`scanText("What is **better**?, 18) returns correct tokens`, () => {
        var tokens = scanText("What is **better**?", 18);

        expect(tokens[0].type).toBe('WORD')
        expect(tokens[0].content).toBe('?')
        expect(tokens.length).toBe(1);
    })
})
