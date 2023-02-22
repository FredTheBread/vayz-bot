const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("I don't have the permission to execute this command!");

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You need the `MANAGE MESSAGES` permission to execute this command.");

    let messageArray = message.content.split(" ");
    const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
        return message.channel.send(`${message.author.username}, you can only clear messages 1 to 99 messages!`)
    } else if (amount <= 1 || amount > 100) {
        return message.channel.send(`${message.author.username}, you can only clear messages from 1 to 99 messages!`)
    }

    message.channel.bulkDelete(amount, true)
}

exports.help = {
    name: "clear",
    description: "Clear a certain amount of messages in a channel",
    usage: "!clear <number>",
    example: "!clear 15"
};

exports.conf = {
    aliases: [],
    cooldown: 5
}