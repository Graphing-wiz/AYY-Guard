const { Client, Intents } = require("discord.js");

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});


client.on("ready", () => {
    console.log("I am ready!");
});

client.on("messageCreate", (message) => {
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    }
});

client.login("MTAxMjMyMzkxMDc0Mzc2OTExOA.GhHWCO.7lLlT2f2ap9KLpe9-D-vYir0vXw92Oc_-oaOCQ");