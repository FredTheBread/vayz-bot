const discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`);
    }

    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`);
    }

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, I do not have enough permission to use this command`);
    }

    let target = message.mentions.members.first();

    if (!target) {
        return message.channel.send(`**${message.author.username}**, Please mention the person who you want to ban`);
    }

    if (target.id === message.author.id) {
        return message.channel.send(`**${message.author.username}**, You can\'t ban yourself`);
    }
    if (!args[1]) {
        return message.channel.send(`**${message.author.username}**, Please specify a reason to ban`);
    }
    let embed = new discord.MessageEmbed()
        .setTitle("PWNED")
        .setDescription(`${target} Just got banned LMAO`)
        .setColor("#ff2050")
        .setFooter(`Banned by ${message.author.username} for ` + args[1] + " POG");

    message.channel.send(embed)

    target.ban(args[1]).catch(err => msg.channel.send(err));
}

exports.help = {
    name: "ban",
    description: "Bans someone",
    usage: "!ban <user>",
    example: "!ban @FredTheBread#6932"
};

exports.conf = {
    aliases: [],
    cooldown: 5
}