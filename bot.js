const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('El bot ha sido iniciado correctamente.');
});

const prefix = "!"

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Aca tienes tu ping.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	}
});

client.login(process.env.BOT_TOKEN);
