const liteflayer = require('./liteflayer')
var config = require('yaml').parse(require('fs').readFileSync('./config.yml','utf-8'))
const sleep = require('system-sleep')
const fs = require('fs')
var bots = {}
createBot = async (e) => {
    bots[e.name] = await liteflayer.createBot({host: e.host, port: e.port})
    await bots[e.name].on('message', (msg) => {
        console.log(msg.toAnsi())
    })
    await bots[e.name]._client.on('error', (e) => {
        console.log(e)
        process.exit(1)
    })
    await bots[e.name]._client.on('end', () => createBot(e))
    await bots[e.name].on('login', () => {
        bots[e.name].chat("/essentials:evanish enable")
        bots[e.name].chat("/extras:username &%1&%2&r&eNightBot".replace('%1',Math.floor(Math.random() * 9)).replace('%2',Math.floor(Math.random() * 9)).replace('%3',Math.floor(Math.random() * 9)))
        config.plugins.forEach(e => {
            bot.chat('&3[&b&lLOAD&3] &b%'.replace('%',e))
            try{
                eval(fs.readFileSync(`./plugins/${e}`,'utf-8'))
                bot.chat('&2[&a&lOK&2] &b%'.replace('%',e))
            } catch (e) {
                bot.chat('&4[&c&lFAIL&4] &b%'.replace('%',e))
            }
        })
        bots[e.name].chat("&6NightBot&7, a utility bot made by &#fafa6e&lm&#bdea75&li&#86d780&lr&#54c18a&lk&#23aa8f&lo&#00918d&lk&#007882&lr&#1f5f70&la&#2a4858&ll")
    })
}
process.on('SIGINT', function() {
    Object.keys(bots).forEach(e => {
        bots[e].core(`tellraw @a ${JSON.stringify(["",{"text":"NightBot","color":"gold"},{"text":" - ","color":"gray"},{"text":"interrupted from console","color":"red"}])}`)
    })
    setTimeout(() => process.exit(0), 100)
});
config.servers.forEach(createBot)