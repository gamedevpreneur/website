var marked = require('marked');
marked.setOptions({
    breaks: true,
})
var renderer = require('./renderer');

module.exports = (code) => {
    return marked(code, { renderer, });
};