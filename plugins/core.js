bot.core = (cmd) => bot.setCommandBlock(cmd, bot.pos, 1, 0b100);
bot.bcore = (cmd, offx,offy,offz) => {
  thepos = { ... bot.pos }
  thepos.x += offx
  thepos.y += offy
  thepos.z += offz
  bot.setCommandBlock(cmd, thepos, 1, 0b100);
};
bot.refillcore = () => bot.chat("/fill ~10 ~ ~10 ~-10 ~-10 ~-10 command_block");
bot.on("pos", () => {
  bot.refillcore();
});
