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
var gh = new Discord.MessageEmbed()
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
    message.author.send(gh)
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
var embed = new Discord.MessageEmbed()
.setTitle("Project Life Israel Report System")
.setColor("#b86610")
.setThumbnail("https://cdn.discordapp.com/attachments/561237955608313859/725708531340148766/WU4YYqQh_400x400.jpg")
.addField(`**instructions**`, "**Please Provoide your report reason :** `LostItems`, `Bug`, `PlayerReport`")
.addField("**Important!**", "**For Lost Items report type below: `!i`, For Bug Report type: `!b`, For Player Report type: `!p`**")
.setFooter("All rights reserved Project Life Israel | coded by IDF.Predator")
var embed1 = new Discord.MessageEmbed()
.setTitle("Project Life Israel Report System")
.setColor("#ff0000")
.setThumbnail("https://cdn.discordapp.com/attachments/561237955608313859/725708531340148766/WU4YYqQh_400x400.jpg")
.addField("**Lost Item Report**", "**Ok so it seems that you have lost some items**\n**so we can track after your lost items you need you to write us below what you have lost!**")
.addField("**Example**", "**!lost <Your lost items>(Without the brackets)**")
.setFooter("All rights reserved Project Life Israel | coded by IDF.Predator")
var embed2 = new Discord.MessageEmbed()
.setTitle("Project Life Israel Report System")
.setColor("#2dd61d")
.setThumbnail("https://cdn.discordapp.com/attachments/561237955608313859/725708531340148766/WU4YYqQh_400x400.jpg")
.addField("**Thank You!**", "**Your Lost Items Report has been dispatched to our staff**\n**You will get answer in the next 78 hours**")
.setFooter("All rights reserved Project Life Israel | coded by IDF.Predator")
var embed3 = new Discord.MessageEmbed()
.setTitle("Project Life Israel Report System")
.setColor("#ff0000")
.setThumbnail("https://cdn.discordapp.com/attachments/561237955608313859/725708531340148766/WU4YYqQh_400x400.jpg")
.addField("Server/Self Bug Report", "**Ok It seems that you are Facing a Bug Problem**\n**In order to help us fix the bug you need to type us below the bug himself**")
.addField("**Example!**", "**!bug <Your Bug report with details>(Without the brackets)**")
.setFooter("All rights reserved Project Life Israel | coded by IDF.Predator")
var embed4 = new Discord.MessageEmbed()
.setTitle("Project Life Israel Report System")
.setColor("#2dd61d")
.setThumbnail("https://cdn.discordapp.com/attachments/561237955608313859/725708531340148766/WU4YYqQh_400x400.jpg")
.addField("**Thank You!**", "**Your Bug Report has been dispatched to our staff**\n**You will get answer in the next 78 hours**")
.setFooter("All rights reserved Project Life Israel | coded by IDF.Predator")
var embed5 = new Discord.MessageEmbed()
.setTitle("Project Life Israel Report System")
.setColor("#ff0000")
.setThumbnail("https://cdn.discordapp.com/attachments/561237955608313859/725708531340148766/WU4YYqQh_400x400.jpg")
.addField("Player Report", "**Ok It seems that You want to complain about a Player**\n**In order to help us help you, you need to type about the player and why do you complain about him**")
.addField("**Example!**", "**!player <Player name and the reason why you complain him> (Without the brackets)**")
.setFooter("All rights reserved Project Life Israel | coded by IDF.Predator")
var embed7 = new Discord.MessageEmbed()
.setTitle("Project Life Israel Report System")
.setColor("#2dd61d")
.setThumbnail("https://cdn.discordapp.com/attachments/561237955608313859/725708531340148766/WU4YYqQh_400x400.jpg")
.addField("**Thank You!**", "**Your Player Report has been dispatched to our staff**\n**You will get answer in the next 78 hours**")
.setFooter("All rights reserved Project Life Israel | coded by IDF.Predator")
SH.on("message", message => {
  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();
  const ss = args.join(' ')
  if (command == "report") {
    message.channel.send(`>>> **Hello ${message.author} I have send you DM message about your report request!**`)
    message.author.send(embed)
  }
  if (command == "i") {
    message.author.send(embed1)
  }
  if (command == "lost") {
    const ssr = SH.channels.cache.get('726146576430661704')
    ssr.send(`>>> ** New Player report**\n**Player Name: ${message.author}**\n**Report Reason:** **Lost items**\n**Lost items:** **${ss}**`)
    message.author.send(embed2)
  }
  if (command == "b") {
    message.author.send(embed3)
  }
  if (command == "bug") {
    const ssr = SH.channels.cache.get('726146576430661704')
    ssr.send(`>>> ** New Player report**\n**Player Name: ${message.author}**\n**Report Reason:** **Bug Report**\n**Bug details:** **${ss}**`)
    message.author.send(embed4)
  }
  if (command == "p") {
    message.author.send(embed5)
  }
  if (command == "player") {
    const ssr = SH.channels.cache.get('726146576430661704')
    ssr.send(`>>> ** New Player report**\n**Player Name: ${message.author}**\n**Report Reason:** **Player Report**\n**Report Details:** **${ss}**`)
    message.author.send(embed7)
  }
})
SH.on("message", message => {
  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();
  const gta = args.join(" ")
  var embed9 = new Discord.MessageEmbed()
.setTitle("Official Staff Announce")
.setColor("#22c517")
.setThumbnail("https://cdn.discordapp.com/attachments/561237955608313859/725708531340148766/WU4YYqQh_400x400.jpg")
.addField("__**Announce**__📡\n-------------", `**${gta}**`)
.setTimestamp()
  if (command == "say") {
    message.delete({ timeout: 1 })
    message.channel.send(embed9)
  } 
})
SH.on("message", async message => {
  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();
  const rss = makeid(20)
  var today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var grt = new Discord.MessageEmbed()
.setTitle("**Account verification success✅**")
.setColor("#22c517")
.addField(`Verification`, `**Hello ${message.author.username}**\n**Here is your verification Token :** **__${rss}__**\n**Remember to save your verification Token**`)
.setFooter("All rights reserved Project Life Israel | coded by IDF.Predator")
var ghj = new Discord.MessageEmbed()
.setTitle("**Account verification📄**")
.setColor("#22c517")
.addField("**success✅**", "**You have been verified on our server!, I have sent you verification token remember to save it!**")
.setFooter("All rights reserved Project Life Israel | coded by IDF.Predator")
var kil = new Discord.MessageEmbed()
.setTitle("**New Account Has been verified✅**")
.setColor("#22c517")
.addField(`**Account Username:**`, `**${message.author.username}**`)
.addField("**Account Created At:**", `**${message.author.createdAt}**`)
.addField("**Bot Account?**", `**${message.author.bot}**`)
.addField("**Discriminator**", `**${message.author.discriminator}**`)
.addField("**Client ID**", `**${message.author.id}**`)
.addField("**Activation Token**", `**${rss}**`)
.addField("**Verification data**", date)
.addField("**Verification Time**", time)
.setFooter("All rights reserved Project Life Israel | coded by IDF.Predator")

  if (command == "verify") {
    if(message.member.roles.cache.some(role => role.name === 'BetaCivi')) return message.channel.send(`${message.author} **Error: You cant verify twice, You already verified**`);
    const role = message.guild.roles.cache.get('721691495245021184');
    const play = message.guild.roles.cache.get('723936594909855864');
    const member = message.guild.members.cache.get(message.author.id);
    message.delete({timeout: 1000})
    member.roles.remove(play)
    member.roles.add(role)
    message.author.send(grt)
    message.channel.send(ghj).then(hg => {
      hg.delete({timeout: 15000})
    })    
    const ssr = SH.channels.cache.get('726928237061472266')
    ssr.send(kil)
  }
})


function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

SH.login(token)