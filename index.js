var argv = require('yargs').argv;
var cowsay = require('cowsay')
console.log(cowsay.say({
  text: argv._.join(' '),
  f: './duck.cow'
}))
