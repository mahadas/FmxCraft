const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
	if (message.content === '!react') {
		message.react('😄');
	}
	if (message.content.startsWith("embed")){
	    message.channel.send({embed: {
	      color: 3447003,
	      description: "Esto es un simple mensaje embed."
	    }});
}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

