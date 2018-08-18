const markdown = require('./markdown');
const renderer = require('./renderer');

var compileBlock = require('./contentblocks').compileBlock;

module.exports = (post) => {
    post = post.replace(/[“”]/g, '"').replace(/[‘’]/g, "'")

    post = compileBlock(post);

    return markdown(post, { renderer, });
}