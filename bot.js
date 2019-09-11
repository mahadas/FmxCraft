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
	if (message.content.startsWith (prefix + "estado")) {
		message.channel.send ("El estado de nuestra ip es:", {file: ["http://status.mclive.eu/FmxCraft/fmxcraft.mcserv.me/25565/banner.png"]});
	}

});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

