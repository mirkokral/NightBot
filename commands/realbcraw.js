var thing = JSON.parse(args.join(' '))
var pchat = require('prismarine-chat')(1.19)
bot.core(`tellraw @a ${JSON.stringify({text: "NightBot: /bcraw " + new pchat(thing).toMotd().replaceAll('§','&'),color: 'yellow'})}`)
sleep(100)
bot.core(`bcraw ${new pchat(thing).toMotd()}`)