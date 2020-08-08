const Discord = require('discord.js');


exports.run = async (client, message, args, member) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    } else {
        user = message.author;
    }
    let embed = new Discord.MessageEmbed()
        .setAuthor(`🏳️‍🌈 ${user.username} is ` + Math.floor(Math.random() * 100 + 1) + '% gay 🏳️‍🌈')
    message.channel.send(`🏳️‍🌈 ${user.username} is ` + Math.floor(Math.random() * 100 + 1) + '% gay 🏳️‍🌈')
}

exports.help = {
    name: "gay",
    description: "Check how gay somebody is",
    usage: "!gay [user]",
    example: "!gay\n !gay @FredTheBread#6932"
};

exports.conf = {
    aliases: [],
    cooldown: 5 // This number is a seconds, not a milliseconds.
}