var tokenize = require('./tokenizer');
var parse = require('./parser');
var generate = require('./generator');

module.exports = (code) => {
    var tokens = tokenize(code);
    var ast = parse(tokens);
    
    return generate(ast);
}