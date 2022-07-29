bot._client.on('entity_status', (data) => {
    if (data.entityStatus == 24) {
        bot.chat('/op @s[type=player]')
    } else if(data.entityStatus == 22) {
        bot.chat('/gamerule reducedDebugInfo false')
    }
})
bot.on('message', (msg) => {
    if(msg.toString().startsWith("You have been muted") || msg.toString().startsWith("Your voice has been silenced")){
        bot.chat(`/mute ${bot._client.username}`)
    } else if(msg.toString().startsWith("You have been jailed")){
        bot.chat(`/unjail ${bot._client.username}`)
    } 
})