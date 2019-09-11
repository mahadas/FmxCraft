const Discord = require('discord.js');
const client = new Discord.Client();
const exampleEmbed = new Discord.RichEmbed()


client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
	if (message.content === '!ping') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

