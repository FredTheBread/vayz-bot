const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  message.channel.send(`Pong! ${client.ws.ping}ms`);
}

exports.help = {
  name: "ping",
  description: "Ponged!",
  usage: "!ping",
  example: "!ping"
};

exports.conf = {
  aliases: [],
  cooldown: 5
}