const parsers = require('./parsers');

module.exports = (tokens) => {
    return parsers.bodyParser(tokens);
}