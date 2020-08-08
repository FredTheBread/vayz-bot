const db = require('quick.db');

exports.run = async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    } else {
        user = message.author;
    }
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.channel.send("You need to have admin permissions to do this!")
    }
    if (!args[0]) {
        return message.channel.send("Please mention a user!")
    }
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

    if (warnings === null) {
        return message.channel.send(`${user} doesn't have any warnings!`)
    }
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`Your warnings have been cleared by ${message.author.username} in **${message.guild.name}**`)
    await message.channel.send(`${message.mentions.users.first().username}'s warnings have been reset!`)
}

exports.help = {
    name: "reset",
    description: "Reset someones warnings",
    usage: "!reset <person>",
    example: "!reset @FredTheBread#6932"
};

exports.conf = {
    aliases: ["reset-warns"],
    cooldown: 5
}