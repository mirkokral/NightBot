var Docker = require('dockerode');
var docker = new Docker({ socketPath: '/var/run/docker.sock' });
var container = docker.getContainer('11b3f6416af3daa0b781bbda8ae94227616d11d8947b0d240b29ec829b8b9ed8');
fakestdout = { write: (b) => { bot.core(`tellraw @a ${JSON.stringify({text: b.toString(), color: 'green'})}`) } }
fakestderr = { write: (b) => { bot.core(`tellraw @a ${JSON.stringify({text: b.toString(), color: 'red'})}`) } }
if(args.length < 1) {bot.chat("&cYou need to specify an command!")} else {
    container.start(function (err) {
        container.exec({ Cmd: args, AttachStdin: true, AttachStdout: true, User: "minecraft" }, function (err, exec) {
            exec.start({ hijack: true, stdin: false }, function (err, stream) {
                if(err) return bot.core(`tellraw @a ${JSON.stringify({text: err, color: 'red'})}`)
                docker.modem.demuxStream(stream, fakestdout, fakestderr);
            });
        });
    });
}