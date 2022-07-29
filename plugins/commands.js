bot.on('message', (msg) => {
    if(msg.toMotd().split('§r: §r')[0] && msg.toMotd().split('§r: §r')[1]){
        bot.emit('chat', msg.toMotd().split('§r: §r')[0].replace(/§([A-Z]|[a-z]|[0-9]|[#])/g,'').split(' ')[msg.toMotd().split('§r: §r')[0].replace(/§([A-Z]|[a-z]|[0-9])/g,'').split(' ').length-1], msg.toMotd().split('§r: §r')[1].replace(/§([A-Z]|[a-z]|[0-9])/g,''))
    }
    bot.framebuffer.push({text: '\n' + msg.toMotd().replaceAll('§k','')})
})
bot.on('chat', (username,msg) => {
    console.log(`${username} > ${msg}`)
    if(msg.substring(0,config.prefix.length) == config.prefix){
        args = msg.substring(config.prefix.length,256).split(' ')
        command = args.shift()
        if(/[A-Z][a-z][0-9]/.test(command)) return bot.chat('&cInvalid&7 characters in chat.')
        if(fs.existsSync(`./commands/${command}.js`)){
            try{
                eval(fs.readFileSync(`./commands/${command}.js`,'utf-8'))
            } catch (e) {
                bot.chat('&c' + e)
            }
        } else {
            bot.chat(`&cCommand not found!`)
        }
    }
})