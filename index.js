//Main Module for RecruitBot
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

bot.on('ready', async () => {
    console.log(`Logged in as ${bot.user.username}`)
    bot.user.setStatus('available')
    bot.user.setPresence(config.defaultPresence);
})
bot.on('message', (message) => {
    if(message.author.id === bot.user.id) return;
    if(message.channel.type == "dm") {
        message.author.send("Hello! This bot does not work in DMs.")
        return;
    }
    if(message.isMentioned(bot.user)) {
        if(message.channel.id === `${config.inputChannelID}`) {
            if(message.content.includes("<@575074315800936449>")) {
                var author = message.author;
                var userMessage = message.content.replace("<@575074315800936449>", "");
                const embed = {
                    "title": "**Recruiting Request**",
                    "description": `${author}: ${userMessage}`,
                    "color": 4507862,
                    "footer": {}
                  };
                bot.channels.get(`${config.outputChannelID}`).send(embed);
               }
        }
        else return;
    }
})

bot.login(config.token);

//event listener to handle errors
bot.on('error', console.error);