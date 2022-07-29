bot.core = (cmd) => bot.setCommandBlock(cmd,bot.pos,1,0b100)
bot.refillcore = () => bot.chat('/fill ~10 ~ ~10 ~-10 ~-10 ~-10 command_block')
bot.on('pos', () => {
    bot.refillcore()
})