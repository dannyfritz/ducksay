'use strict';

var cowsay = require('cowsay');

module.exports = function (message) {
  return cowsay.say({
    text: message,
    f: './duck.cow'
  })
}
