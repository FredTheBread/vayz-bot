const {
    MessageEmbed
} = require("discord.js");
const api = require("imageapi.js");

exports.run = async (client, message, args) => {
    let subreddits = ["comedyheaven", "dank", "meme", "memes", "dankmemes", "funny"];
    let subreddit =
        subreddits[Math.floor(Math.random() * subreddits.length)];
    let img = await api(subreddit, true);
    const Embed = new MessageEmbed()
        .setTitle(`A meme from r/${subreddit}`)
        .setURL(`https://reddit.com/r/${subreddit}`)
        .setColor("RANDOM")
        .setImage(img);
    message.channel.send(Embed);
}

exports.help = {
    name: "meme",
    description: "Send a funny meme from a subreddit",
    usage: "!meme",
    example: "!meme"
};

exports.conf = {
    aliases: ["funny"],
    cooldown: 5
}