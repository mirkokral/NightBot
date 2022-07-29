const      mc = require("minecraft-protocol"),
           fs = require("fs"),
eventemmitter = require('events'),
         util = require("util"),
         rand = require("randomstring"),
        pchat = require("prismarine-chat")("1.16")
function createBot(config){
    bot = new eventemmitter()
    bot.position = {x: 0, y: 0, z: 0}
    if(!config.username) config.username = "Liteflayer" + rand.generate(3)
    bot._client = mc.createClient(config)
    bot._queue = []
    bot._client.on('position', (pos) => {bot.emit('pos',pos)})
    bot._client.on('chat', (msg) => {
        try{
            var message = new pchat(JSON.parse(msg.message))
            if(message.toString().startsWith('Command set:')) return
            bot.emit('message', message)
        } catch (e) {console.log(e)}
    })
    bot._client.on('login', (msg) => {
        try{
            bot.emit('login')
        } catch (e) {console.log(e)}
    })
    setInterval(() => {
        if(bot._queue[0]){
            bot._client.write("chat", {message: bot._queue[0]})
            bot._queue.shift()
        }
    }, 100);
    bot.setCommandBlock = (command, pos, mode, flags) => bot._client.write('update_command_block',{command: command, location: pos, mode: mode, flags: flags})
    bot.chat = (send) => bot._queue.push(send)
    return bot
}
module.exports = { createBot }