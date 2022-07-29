const      mc = require("minecraft-protocol"),
           fs = require("fs"),
eventemmitter = require('events'),
         util = require("util"),
         rand = require("randomstring"),
        pchat = require("prismarine-chat")
function createBot(config){
    bot = new eventemmitter()
    bot.position = {x: 0, y: 0, z: 0}
    if(!config.username) config.username = "Liteflayer" + rand.generate(3)
    bot._client = mc.createClient(config)
    bot._client.on('position', (pos) => {bot.position = pos})
    bot._client.on('message', (msg) => {
        try{
            bot.emit('message', new pchat.ChatMessage(msg))
        } catch (e) {}
    })
    bot.setCommandBlock = (command, pos, mode, flags) => bot._client.write('update_command_block',{command: command, position: pos, mode: mode, flags: flags})
    bot.chat = (send) => bot._client.write('chat',{message: send})
}
module.exports = { createBot }