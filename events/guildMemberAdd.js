module.exports = async (client, member, message) => {
  const db = require("quick.db");
  const Discord = require("discord.js");

  if (member.user.bot) return;
  // If the user was a robot, return it.
  // Unless, you create a welcome/goodbye system. Put this under your welcome/goodbye system.

  let number = randomInteger(100000, 1000000);
  // The number will be shuffled from the range 100K - 1M

  let verifyChannel = member.guild.channels.cache.find(ch => ch.id === "738784368763338842");
  // Your Verification Text Channel.
  await db.set(`verification.${member.user.id}`, number);
  const dm = new Discord.MessageEmbed()
    .setColor(0x7289DA)
    .setTitle(`Welcome to ${member.guild.name}!`)
    .setDescription("Hello! Before you get started, I just want you to verify yourself first.")
    .addField("Please enter the following code into the #verify channel.", `**This is your code:** ${number}`)
  await member.send(dm).catch(() => {
    verifyChannel.send(`<@!${member.user.id}>, your DMs are locked. Please unlock them and type \`resend\` here.`)
      .then(i => i.delete({
        timeout: 10000
      }));
  })
}

function randomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}