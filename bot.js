const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('Bot Iniciado Correctamente!');
});

var prefix = ("!");


client.on('message', message => {
	if (message.content.startsWith(prefix + "estado")) {
    message.channel.send("pong!");
	} else
	if (message.content.startsWith(prefix + "hola")) {
	message.channel.send("Hola que tal?");
	}
	if (message.content.startsWith(prefix +"ip")){
message.channel.send({embed: {
    color: 3447003,
    author: {
    },
    title: "client.user.username",
    url: "http://google.com",
    description: "La ip es: play.fmxcraft.ml",
    timestamp: new Date(),
    footer: {
      text: "© FmxCraft"
    }
  }
});
}
         if (message.content.startsWith(prefix + "ayuda")) {
message.channel.send({embed: {
    color: 3447003,
    author: {
    },
    title: "",
    url: "http://google.com",
    description: "La ip es: play.fmxcraft.ml",
fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
    timestamp: new Date(),
    footer: {
      text: "© FmxCraft"
    }
  }
});	 


	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

