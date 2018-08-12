var scanners = require('./scanners');

module.exports = (code) => {
    var tokens = [];
    var error = false;

    for(var i = 0; i < code.length; ) {
        for(var j = 0; j < scanners.length; j++) {
            var scan = scanners[j];

            var token = scan(code, i);

            if (token) {
                if (Array.isArray(token)) {
                    tokens = tokens.concat(token);

                    token.forEach(t => {
                        i += t.content.length;
                    })

                } else {
                    tokens.push(token);
                    i += token.content.length;
                }

                break;
            }
        }
    }

    return tokens;
}