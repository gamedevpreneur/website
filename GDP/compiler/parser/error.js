var warnings = []
var errors = []

function addWarning(line, message) {
    warnings.push({
        line,
        message,
    })
}

function printWarning() {
    warnings.forEach(warning => {
        console.log(`line ${warning.line}: ${warning.message}`);
    })
}

function addErrors() {
    errors.push({
        line,
        message,
    })
}

function printErrors() {
    errors.forEach(error => {
        console.log(`line ${error.line}: ${error.message}`);
    })
}

module.exports = {
    addWarning,
    printWarning,
    addErrors,
    printErrors,
}