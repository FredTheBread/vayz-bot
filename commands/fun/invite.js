const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.send('Please specify a bot ID!')
    message.channel.send(`https://discordapp.com/oauth2/authorize?client_id=${args[0]}&scope=bot`)
}

exports.help = {
    name: "invite",
    description: "Make an invite link with the ID of a bot",
    usage: "!invite <ID>",
    example: "!invite 738356389298044939"
};

exports.conf = {
    aliases: ["inv"],
    cooldown: 5
}