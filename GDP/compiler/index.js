const markdown = require('./markdown');

var { preMarkdown, postMarkdown } = require('./contentblocks');
var ebookBlocks = require('./ebookblocks');

module.exports = (post, isBook) => {
    post = post.replace(/[“”]/g, '"')
                .replace(/[‘’]/g, "'")
                .replace(/\r\n/g, '\n')

    if (isBook) {
        ebookBlocks();
    }

    post = preMarkdown(post);
    post = markdown(post);
    post = postMarkdown(post);

    return post;
}