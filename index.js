const Discord = require("discord.js")
const SH = new Discord.Client();
const token = process.env.token;
const Gamedig = require('gamedig');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});



SH.on("ready", message => {
  console.log("connected")
  async function update()
  {
    Gamedig.query({
      type: "arma3",
      host: "188.165.42.210",
      port: "2302"
    }).then((state) => {
      SH.user.setActivity(`✅Online ${state.players.length}/${state.maxplayers}`);
    }).catch((error) => {
      SH.user.setActivity(`❌Server is offline`);
    });
  }
  setInterval(() => {update();}, 7000); 
})
var embed = new Discord.MessageEmbed()
.setTitle("Project Life Israel Registration")
.setColor("#19b636")
.setThumbnail("https://cdn.discordapp.com/attachments/561237955608313859/725708531340148766/WU4YYqQh_400x400.jpg")
.addField("instructions", "**Hey and welcome to project life israel offical.**\n **Before you can start play and enjoy our server you need to fill a short application, So we can get more information about your character and about yourself**\n **After you fill a application one of our support team will contact you!**")
.addField("\u200B", "\u200B")
.addField("**Server Application**", "[Click here for the application](https://form.jotform.com/201653059131447)")
.setFooter("All rights reserved Project Life Israel | coded by IDF.Predator")
SH.on("message", message => {
  if (message.content == "!register") {
    if(message.member.roles.cache.some(role => role.name === 'BetaCivi')) return message.channel.send(`${message.author} **You cant use this command beacuse you are already whitelisted**`);
    message.channel.send(`**Hey ${message.author} I Have sent you a  Direct Message with  the registration instructions👍**`)
    message.author.send(embed)
  }
})

var embed1 = new Discord.MessageEmbed()
.setTitle("Project Life Israel Registration")
.setColor("#19b636")
.setThumbnail("https://cdn.discordapp.com/attachments/561237955608313859/725708531340148766/WU4YYqQh_400x400.jpg")
.addField("Server mods download instructions", "for full mods downlad instructions Check the link [Project Life Mods Tutorial](https://docs.google.com/document/d/1e2hXoUaEofBWakscztmARMzMn9YcARKcm_Cwo9-AlPo/edit?usp=drivesdk)")
.setFooter("All rights reserved Project Life Israel | coded by IDF.Predator")

SH.on("message", message => {
  if (message.content == "!mods") {
    if(message.member.roles.cache.some(role => role.name === 'player')) return message.channel.send(`${message.author} **You cant use this command beacuse you are Not whitelisted on this server Please use the !register command**`);
    message.channel.send(`**Hey ${message.author} I have sent you a Direct Message with server mods instructions✅**`)
    message.author.send(embed1)
  }
})



SH.login(token)