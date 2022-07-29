bot.framebuffer = [];
setTimeout(() => {
  setInterval(() => {
    for (let ix = -1; ix < 1; ix++) {
      for (let iz = -1; iz < 1; iz++) {
        bot.bcore(
          `tellraw @a[tag=fb] ${JSON.stringify(
            [].concat(
              ["\n".repeat(20)],
              typeof bot.framebuffer == "array"
                ? bot.framebuffer.slice(-50,0)
                : [bot.framebuffer]
            )
          )}`,
          ix, 
          -1,
          iz
        );
      }
    }
  }, 50);
}, 2000)
