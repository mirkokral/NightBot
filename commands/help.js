var commands = require('fs').readdirSync('./commands/')
var thing = [{text: "Commands - ",color:'gray'}]
commands.forEach(e => {
    thing.push({text: config.prefix + e.substring(0,e.length-3) + ' ', color: 'green'})
})
bot.core(`tellraw @a ${JSON.stringify(thing)}`)