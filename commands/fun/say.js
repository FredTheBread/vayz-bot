exports.run = async (client, message, args) => {
    let MSG = message.content.split(`.say `).join("");
    if (!MSG)
      return message.channel.send(`You did not specify your message to send!`);
    message.channel.send(MSG);
    message.delete();
}

exports.help = {
  name: "say",
  description: "Make the bot say anything u want",
  usage: "!say <message>",
  example: "!say GAY"
};

exports.conf = {
  aliases: [],
  cooldown: 5
}