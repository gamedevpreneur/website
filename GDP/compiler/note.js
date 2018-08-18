var marked = require('marked');

marked.setOptions({
    breaks: true,
})

var text = 'asdf\n`qwer`';
var text = "<h1>1234</h1>\n" + "<p>1231</p>"

console.log(marked(text))

var t = 'title="abc" class="good"';
var r = RegExp(/(.+?)="(.*?)"\s?/, 'g');

console.log(r.exec(t));
console.log(r.exec(t));