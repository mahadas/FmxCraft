const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ip') {
    	message.channel.send("Aca esta nuestra IP", {
    file: "http://status.mclive.eu/FmxCraft/fmxcraft.mcserv.me/25565/banner.png"});
};

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

