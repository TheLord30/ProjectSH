const Discord = require("discord.js")
const SH = new Discord.Client();
const token = process.env.token;
const Gamedig = require('gamedig');
var express = require('express');
var app = express();
const prefix = "!"

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
const sh8 = new Discord.RichEmbed()
.setTitle("📑Ticket System📑")
.setColor(`#06ad22`)
.setDescription(`**Please provide the help you need to make the help faster✅**`)
.setFooter(`SH Ticket System`)
SH.on("message", message => {
const mem = message.mentions.members.first();
const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();
  if (command == "whitelist") {
    if (!message.member.roles.exists("name", "Admin Server")) return message.channel.send(`**${message.author} Sorry but you cant use this command if you are not a support team or server owner**`)
    mem.createDM()
  }
})

SH.login(token)