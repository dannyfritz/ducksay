#!/usr/bin/env node
'use strict'

var ducksay = require('../ducksay')

var argv = require('yargs').argv;

console.log(ducksay(argv._.join(' ')))
