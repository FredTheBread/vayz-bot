const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let MSG = message.content.split(`.embed `).join("");
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`);
    let embed = new Discord.MessageEmbed()
    .addField("Message:", MSG)
    message.channel.send(embed);
    message.delete();
}

exports.help = {
  name: "embed",
  description: "Make the bot say anything u want",
  usage: "!embed <message>",
  example: "!embed GAY"
};

exports.conf = {
  aliases: [],
  cooldown: 5
}