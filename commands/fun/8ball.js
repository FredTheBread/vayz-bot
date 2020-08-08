const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let question = message.content.slice(7);
  if (!question)
    return message.channel.send(`You did not specify your question!`);
  else {
    let responses = [
      "Yes",
      "No",
      "Definetly",
      "Absolutely",
      "Not in a million years",
      "Defo not",
      "Absolutely not",
      "We like fortnite",
      "Probably",
      "I honestly don't know",
      "M8 yes"
    ];
    let response =
      responses[Math.floor(Math.random() * responses.length - 1)];
    let Embed = new Discord.MessageEmbed()
      .setTitle(`8Ball!`)
      .setDescription(`Your question: ${question}\nMy reply: ${response}`)
      .setColor(`RANDOM`);
    message.channel.send(Embed);
  }
}

exports.help = {
  name: "8ball",
  description: "Ask the 8ball a question",
  usage: "!8ball <question>",
  example: "!8ball Will I bake a cake tomorrow"
};

exports.conf = {
  aliases: [],
  cooldown: 5
}