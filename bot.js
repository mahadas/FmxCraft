const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

const prefix = "+";
client.on ("message", (message) => {
	if (message.author.bot) return;

	if (message.content.startsWith (prefix + "hello")) {
		message.reply ('Hi');
	}
    if (message.content.startsWith (prefix + 'how to embed') {
		const embed = new RichEmbed()

		.setTitle('A slick little embed')
		.setColor(0xFF0000)
		.setDescription('Hello, this is a slick embed!');
		message.channel.send(embed);
	};	
};


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

