const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You are not allowed to do that!");
    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Please specify the user you would like to give a role to!");
    const role = message.guild.roles.cache.find(r => r.name === args.slice(1).join(" "));
    if (!role) return message.channel.send("Please specify a role you would like to add to the user!");
    await user.roles.add(role.id).catch(e => console.log(e.message)), message.channel.send(`${user} now has the ${role} role!`)
}

exports.help = {
    name: "giverole",
    description: "Give someone a role!",
    usage: "!giverole <person> <role>",
    example: "!giverole @FredTheBread#6932 gay"
};

exports.conf = {
    aliases: ["give"],
    cooldown: 5
}