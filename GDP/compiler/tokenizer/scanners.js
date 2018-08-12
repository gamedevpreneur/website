function scanLineBreak(code, index) {
    var char = code[index];
    var tokens = null;

    if (char == '\n') {
        tokens = [];
        tokens.push({
            type: 'NEW_LINE',
            content: '\n',
        })

        char = code[++index];

        
        var indent = '';
        while(true) {
            if (char == "\n") {
                tokens.push({
                    type: 'EMPTY_LINE',
                    content: '\n',
                })
                indent = '';
            } else if (char == '*' || char == '-' || char == '+') {
                tokens.push({
                    type: 'BULLET',
                    content: indent + char,
                })
                indent = '';

                break;
            } else if (char == ' ' || char == '\t') {
                indent += char;
            } else if (char == '#') {
                var headingChars = '#';
                while(code[++index] == '#') {
                    headingChars += '#';
                }

                tokens.push({
                    type: 'HEADING',
                    content: headingChars,
                })

                break;
            } else {
                break;
            }
            char = code[++index];
        }
    }

    return tokens;
}

function scanMultiChar(code, index) {
    var types = {
        '*': 'STAR',
        '`': 'BACK_TICK',
        '_': 'UNDERSCORE',
    };

    var char = code[index]
    var type = types[char];

    if (type) {
        if (char == '*' || char == '_') {
            if (code[index + 1] == char) {
                if (code[index + 2] != char) {
                    return {
                        type: 'DOUBLE_' + type,
                        content: char + char,
                    }
                } else {
                    return null;
                }
            } else {
                return {
                    type, 
                    content: char,
                }
            }
        } else {
            if (code[index + 1] == '`' && code[index+2] == '`') {
                if (code[index+3] != '`') {
                    return {
                        type: 'TRIPLE_' + type,
                        content: char + char + char,
                    }
                } else {
                    return null;
                }
            } else {
                if (code[index+1] != '`') {
                    return {
                        type,
                        content: char,
                    }   
                }
                return null;
            }
        }
    }

    return null;
}

function scanSingleChar(code, index) {
    var types = {
        '[': 'BRACKET_LEFT',
        ']': 'BRACKET_RIGHT',
        '{': 'BRACE_LEFT',
        '}': 'BRACE_RIGHT',
        '(': 'PARENTHESES_LEFT',
        ')': 'PARENTHESES_RIGHT',
        '<': 'ANGULAR_BRACKET_LEFT',
        '>': 'ANGULAR_BRACKET_RIGHT',
        '"': 'DOUBLE_QUOTE',
        "'": 'SINGLE_QUOTE',
        '/': 'SLASH',
        '=': 'EQUAL',
        '!': 'EXCLAMATION',
    };

    var char = code[index];
    var type = types[char];

    if (type) {
        return {
            type,
            content: char,
        }
    }

    return null;
}

function scanText(code, index) {
    var tokens = [];
    var word = '';
    var char = code[index];

    var spaceMode = ' \t'.includes(char);

    while(true) {
        if (spaceMode && !(' \t'.includes(char))) {
            spaceMode = false;
            
            tokens.push({
                type: 'SPACE',
                content: word,
            })

            word = '';
        }

        if (!spaceMode && ' \t'.includes(char)) {
            spaceMode = true;

            tokens.push({
                type: 'WORD',
                content: word,
            })

            word = '';
        }

        if ("[]{}()<>\"'/=!`*_|\\-+\n".includes(char)) {
            if (word.length != 0) {
                tokens.push({
                    type: spaceMode ? 'SPACE' : 'WORD',
                    content: word,
                });
            }
            break;
        }

        word += char;

        char = code[++index];

        if (!char) {
            if (word.length != 0) {
                tokens.push({
                    type: spaceMode ? 'SPACE' : 'WORD',
                    content: word,
                });
            }
            break;
        }
    }

    return tokens;
}

module.exports = [
    scanLineBreak,
    scanMultiChar,
    scanSingleChar,
    scanText,
]