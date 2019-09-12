const Discord = require('discord.js');
const client = new Discord.Client();
const receivedEmbed = message.embeds[0];
const exampleEmbed = new Discord.RichEmbed(receivedEmbed).setTitle('New title');


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
	if (message.content.startsWith(prefix +"embed")){
    message.channel.send({embed: {
      color: 3447003,
      description: "Esto es un simple mensaje embedholaaaaaaaaaaabdfifdbejeke."
    }});
        if (message.content.startsWith(prefix +"estado")){
      channel.send(exampleEmbed);
}
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

