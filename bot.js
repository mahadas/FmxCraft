const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

var prefix = ("!");


client.on('message', message => {
	if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
	} else
	if (message.content.startsWith(prefix + "hola")) {
	message.channel.send("Hola que tal?");
	}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

