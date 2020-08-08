const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You are not allowed to do that!");
    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Please specify the user you would like to remove a role from!");
    const role = message.guild.roles.cache.find(r => r.name === args.slice(1).join(" "));
    if (!role) return message.channel.send("Please specify a role you would like to from from the user!");
    await user.roles.remove(role.id).catch(e => console.log(e.message)), message.channel.send(`${role} has been removed from ${user}!`)
}

exports.help = {
    name: "removerole",
    description: "Remove a role from somebody",
    usage: "!removerole <person> <role name>",
    example: "!removerole @FredTheBread#6932 Member"
};

exports.conf = {
    aliases: ["remove"],
    cooldown: 5
}