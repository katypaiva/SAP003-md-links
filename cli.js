#!/usr/bin/env node
const mdLinks = require('./lib/index.js')
const path = process.argv[2]

mdLinks(path)
.then((result) => result.forEach(element => console.log(element.href, element.text)))
.catch((error) => console.log(error))

