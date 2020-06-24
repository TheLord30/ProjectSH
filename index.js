const Discord = require("discord.js")
const SH = new Discord.Client();
const token = process.env.token;
const Gamedig = require('gamedig');




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




SH.login(token)