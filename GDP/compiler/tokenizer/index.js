var scanners = require('./scanners');

module.exports = (code) => {
    var tokens = [];
    var scannerList = [
        scanners.scanLineBreak,
        scanners.scanMultiChar,
        scanners.scanSingleChar,
        scanners.scanText,
    ]

    for(var i = 0; i < code.length; ) {
        for(var j = 0; j < scannerList.length; j++) {
            var scan = scannerList[j];

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