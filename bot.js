﻿const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**مساء النور
https://discord.gg/V5ES5uD
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
** مساءالنور
https://discord.gg/V5ES5uD
**`) 
}).catch(console.error)
})


client.on('message', message => {
if (message.content === 'رابط') {
message.author.send(' سلام عليكم https://discord.gg/V5ES5uD')
}
});


client.on('message', message => {
if (message.content === '.') {
message.author.send(' سلام عليكم https://discord.gg/V5ES5uD')
}
});

client.on('message', message => {
if (message.content === 'سلام عليكم') {
message.author.send(' سلام عليكم https://discord.gg/V5ES5uD')
}
});

client.on('guildCreate', g => {
g.members.forEach(m => {
if (m.voiceChannel) {
m.send(' سلام عليكم https://discord.gg/V5ES5uD')
}
})
});


client.login(process.env.BOT_TOKEN);