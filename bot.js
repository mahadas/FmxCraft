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
	if (message.content.startsWith(prefix +"richembed" )){
    const embed = new Discord.RichEmbed() 
    .setTitle("Este es su título, puede contener 256 caracteres")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86)
    .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
    .setFooter("Pie de página, puede contener 2048 caracteres", client.user.avatarURL)
    .setImage(message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setURL("https://github.com/CraterMaik")
    .addField("Este es un título de campo, puede contener 256 caracteres",
      "Este es un valor de campo, puede contener 2048 caracteres.")
    .addField("Campo en línea", "Debajo del campo en línea", true)
    .addBlankField(true)
    .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);
    
    message.channel.send({embed});
}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

