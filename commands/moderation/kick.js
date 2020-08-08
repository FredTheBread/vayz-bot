const discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
    }

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, I do not have enough permission to use this command`)
    }

    let target = message.mentions.members.first();

    if (!target) {
        return message.channel.send(`**${message.author.username}**, Please mention the person who you want to kick`)
    }

    if (target.id === message.author.id) {
        return message.channel.send(`**${message.author.username}**, You can\'t kick yourself idiot`)
    }
    if (!args[1]) {
        return message.channel.send(`**${message.author.username}**, Please specify a reason to kick`)
    }
    let embed = new discord.MessageEmbed()
        .setTitle("REKT KID")
        .setDescription(`${target} Got Kicked LOL`)
        .setColor("#ff2050")
        .setFooter(`Kicked by ${message.author.username} for ` + args[1] + ` KIDDO`);

    message.channel.send(embed)

    target.kick(args[1]);
}

exports.help = {
    name: "kick",
    description: "Kick a person",
    usage: "!kick <person>",
    example: "!kick @FredTheBread"
};

exports.conf = {
    aliases: [],
    cooldown: 5
}