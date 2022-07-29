var thing = JSON.parse(args.join(' '))
var pchat = require('prismarine-chat')(1.19)
bot.core(`say tellraw @a ${JSON.stringify({text: "NightBot: /bcraw " + new pchat(thing),color: 'yellow'})}`)
bot.core(`bcraw ${new pchat(thing)}`)