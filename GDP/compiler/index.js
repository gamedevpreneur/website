const markdown = require('./markdown');
const renderer = require('./renderer');

var { preMarkdown, postMarkdown } = require('./contentblocks');

module.exports = (post) => {
    post = post.replace(/[“”]/g, '"')
                .replace(/[‘’]/g, "'")
                .replace(/\r\n/g, '\n')

    post = preMarkdown(post);
    post = markdown(post, { renderer, })
    post = postMarkdown(post);

    return post;
}