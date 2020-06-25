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
.addField("instructions", "Hey and welcome to project life israel offical\n Before you can start play and enjoy our server you need to fill a short application So we can get more information about your character and about yourself\n[Click here for the application](https://form.jotform.com/201653059131447)\n After you fill a application one of our support team will contact you!")
.addField("\u200B", "\u200B")
.setFooter("All rights reserved Project Life Israel | coded by IDF.Predator")
SH.on("message", message => {
  if (message.content == "!register") {
    message.author.send(embed)
  }
})



SH.login(token)