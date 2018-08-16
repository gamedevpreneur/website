const { addWarning, addError, } = require('./error')

function bodyParser(tokens) {
    return {
        type: 'Body',
        nodes: [],
    }
}

function headingParser(tokens) {

}

function plainTextParser(tokens, index) {
    var text = '';
    var consumed = 0;

    for(var i = index;;i++) {
        if(!tokens[i]) break;
        
        var type = tokens[i].type;

        if(type == 'WORD' || type == 'SPACE') {
            text += tokens[i].content;
            consumed += 1;
        } else {
            break;
        }
    }

    var node = null;

    if (text.length != 0) {
        node = {
            type: 'Text',
            content: text,
        }
    }

    return {
        node,
        consumed,
    }
}

function decoratedTextParser(tokens, index, anyPhrase) {
    var decorators = {
        'STAR': 'Italic',
        'UNDERSCORE': 'Italic',
        'DOUBLE_STAR': 'Bold',
        'DOUBLE_UNDERSCORE': 'Bold',
        'DOUBLE_TILDE': 'StrikeThrough',
    };

    var decoType = decorators[tokens[index].type];

    if (decoType) {
        if (!anyPhrase) {
           var result;
        }
    }
}

function linkParser(tokens, index) {
    var nodes = {}
    var consumed = 0;
    var lineNumber = tokens[index].lineNumber;

    if (tokens[index].type == 'BRACE_LEFT') {
        consumed += 1;
        let result = plainTextParser(tokens, index + consumed);

        if (result.node && result.node.type == 'Text') {
            nodes.text = result.node;
            consumed += result.consumed;
        } else {
            addWarning(lineNumber, 'It is not a text after [. Is it intended?');
            return {
                node: {
                    type: 'Text',
                    content: '[',
                },
                consumed: 1,
            }
        }
    } else {
        return {
            node: null,
            consumed: 0,
        }
    }

    if (tokens[index + consumed].type == 'BRACE_RIGHT' &&
        tokens[index + consumed + 1].type == 'PARENTHESES_LEFT') {
        consumed += 2;

        let result = urlParser(tokens, index + consumed);

        if(result.node && result.node.type == 'Url') {
            nodes.url = result.node;
            consumed += result.consumed;
        } else {
            addError(lineNumber, `URL should be added after (.`);
            return {
                error: true,
            }
        }
    } else {
        addWarning(lineNumber, 'No closing ]. Is it intended?');
        return {
            node: {
                type: 'Text',
                content: '[' + nodes.text.content,
            },
            consumed: 1 + nodes.text.content,
        }
    }

    if (tokens[index + consumed].type == 'PARENTHESES_RIGHT') {
        consumed += 1;
    } else {
        addError(lineNumber, `Link didn't end properly with ).`);
        return {
            error: true,
        }
    }

    return {
        node: {
            type: 'Link',
            nodes, 
        },
        consumed,
    }
}

function urlParser(tokens, index) {
    var text = '';
    var consumed = 0;

    for(var i = index;;i++) {
        if(!tokens[i]) break;
        
        var type = tokens[i].type;

        if(type == 'WORD' || type == 'SLASH' || type == 'MINUS') {
            text += tokens[i].content;
            consumed += 1;
        } else {
            break;
        }
    }

    var node = null;

    if (text.length != 0) {
        node = {
            type: 'Url',
            content: text,
        }
    }

    return {
        node,
        consumed,
    }
}

module.exports = {
    bodyParser,

    plainTextParser,
    decoratedTextParser,
    linkParser,
    urlParser,
}