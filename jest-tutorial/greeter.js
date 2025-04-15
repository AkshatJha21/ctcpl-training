const { log } = require('./logger');

function greet(name) {
    log(`Hello, ${name}`);
}

function checkCallback(callback) {
    callback('Akshat');
}

module.exports = { greet, checkCallback};