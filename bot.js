const Discord = require('discord.js');
const client = new Discord.Client();
const exampleEmbed = new Discord.RichEmbed()
	.setTitle('Some title');
	.setColor('#0099ff');
	.addField('Regular field title', 'Some value here')

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
	if (message.content === '!ping') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
		channel.send(exampleEmbed);
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

