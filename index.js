const liteflayer = require('./liteflayer')
const config = require('yaml').parse(require('fs').readFileSync('./config.yml','utf-8'))
console.log(config)