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
	if (message.content.startsWith(prefix +"ip")){
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "",
    url: "http://google.com",
    description: "La ip es: play.fmxcraft.ml",
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© FmxCraft"
    }
  }
});
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

