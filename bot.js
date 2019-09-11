const Discord = require('discord.js');
const client = new Discord.Client();
const exampleEmbed = new Discord.RichEmbed()
	.setTitle('Some title')
	.attachFiles(['../assets/discordjs.png'])
	.setImage('attachment://discordjs.png');


client.on('ready', () => {
    console.log('I am ready!');
});
client.on('message', message => {
  if (command === 'estado') {
  	message.channel.send('Que buen servidor no?')
  	channel.send(exampleEmbed);
  }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
