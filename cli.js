#!/usr/bin/env node
'use strict'

var getStdin = require('get-stdin')
var ducksay = require('../ducksay')
var trim = require('trim')

getStdin()
.then(function (str) {
  if (str) {
    console.log(ducksay(trim.right(str)))
  } else {
    var argv = require('yargs').argv
    if (argv._.length > 0) {
      console.log(ducksay(argv._.join(' ')))
    } else {
      console.log(ducksay('...'))
    }
  }
})
