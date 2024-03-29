const ms = require('ms');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have permission to rerol giveaways');

    if (!args[0]) return message.channel.send('No giveaway ID provided');

    let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if (!giveaway) return message.channel.send('Couldn\'t find a giveaway with that ID/name');

    client.giveawaysManager.reroll(giveaway.messageID)
        .then(() => {
            message.channel.send('Giveaway rerolled')
        })
        .catch((e) => {
            if (e.startsWith(`Giveaway with ID ${giveaway.messageID} is not ended`)) {
                message.channel.send('This giveaway hasn\'t ended yet')
            } else {
                console.error(e);
                message.channel.send('An error occured')
            }
        })
}

exports.help = {
    name: "reroll",
    description: "Reroll a giveaway",
    usage: "!reroll <message id>",
    example: "!reroll 741701510098059265"
};

exports.conf = {
    aliases: [],
    cooldown: 5
}