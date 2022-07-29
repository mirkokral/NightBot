(a = e => {
    var x = ""
    for(var i = 0; i < e; i++){
        x += String.fromCharCode(Math.floor(Math.random() * 0xFFFF))
    }
    return x
});
bot.core(`give ${args[0]} stone${JSON.stringify({display: {Name: JSON.stringify({text: a(23000)})}})}`)