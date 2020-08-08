const discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You dont have permission to perform this command!")
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);


    if (isNaN(args[0])) return message.channel.send("You need to provide an ID.")
    let bannedMember = await client.users.fetch(args[0])
    if (!bannedMember) return message.channel.send("Please provide a user id to unban someone!")

    let reason = args.slice(1).join(" ")
    if (!reason) reason = "No reason"

    if (!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I dont have permission to perform this command!") |
        message.delete()
    try {
        message.guild.members.unban(bannedMember, reason)
        let embed = new discord.MessageEmbed()
        .setTitle("RIP")
        .setDescription(`Gosh darn it, ${bannedMember.tag} Just got unbanned POG`)
        .setColor("#ff2050")
        .setFooter(`UNBANNED by ${message.author.username} for ${reason}`);

    message.channel.send(embed)
    } catch (e) {
        console.log(e.message)
    }
}

exports.help = {
    name: "unban",
    description: "Unban someone who got banned",
    usage: "!unban <id>",
    example: "!unban 673485740679757835"
};

exports.conf = {
    aliases: [],
    cooldown: 5
}