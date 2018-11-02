const prism = require('prismjs');
var loadLanguages = require('prismjs/components/index.js');
loadLanguages(['csharp', 'typescript']);

module.exports = (code, language, lineNumber) => {
    var highlighted = prism.highlight(code, prism.languages[language], language).trim();
    var lines = highlighted.split('\n');
    var result = lines.map(line => {
        var added = line.startsWith("$a");
        var removed = line.startsWith("$r");
        line = line.replace(/\$(a|r)/, '');

        return `<span class="line ${added ? "added" : ""} ${removed ? "removed": ""}">` + 
                    `<span class="line-number"></span>` +
                    `<span class="line-code">${line}</span>` +
            `</span>`;
    }).join('');

    var lineStart = '';
    
    if(lineNumber) {
        lineStart = 'style="counter-reset: line';

        var offset = lineNumber - 1
        if (offset >= 0) {
            lineStart += ('+' + offset);
        } else {
            lineStart += ('-' + offset);
        }

        lineStart += '"';
    }

    return `<pre class="language-${language}">` +
    `<code class="codeblock language-${language} ${lineNumber ? 'line-numbers': ''}" ${lineStart}>` + 
        result +
    '</code></pre>\n';
}