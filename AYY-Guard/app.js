const { Client, Intents } = require("discord.js");

//gets the Discord Token from .env file
const TOKEN = process.env.TOKEN;


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

client.login(TOKEN);