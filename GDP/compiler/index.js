const markdown = require('./markdown');

var { preMarkdown, postMarkdown } = require('./contentblocks');

module.exports = (post) => {
    post = post.replace(/[“”]/g, '"')
                .replace(/[‘’]/g, "'")
                .replace(/\r\n/g, '\n')

    post = preMarkdown(post);
    post = markdown(post);
    post = postMarkdown(post);

    return post;
}