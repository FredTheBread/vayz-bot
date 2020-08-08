const db = require("quick.db");
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    const user = message.mentions.members.first() || message.author

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    if (warnings === null) warnings = 0;
    const embed = new Discord.MessageEmbed()
        .setAuthor(`Number of Warnings`)
        .setDescription(`${user} has **${warnings} warnings**!`)
    message.channel.send(embed)
}

exports.help = {
    name: "warnings",
    description: "Check how many warnings someone has",
    usage: "!warnings <person>",
    example: "!warnings @FredTheBread#6932"
};

exports.conf = {
    aliases: ["warns"],
    cooldown: 5
}