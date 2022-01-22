const Discord = require("discord.js");
const tokenfile = require("./tokenfile.json");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async() => {
    console.log(`${bot.user.username} elindult!`)

    let status = [
        "Szia!",
        "Test",
        "Vilag"
    ]

    setInterval(function() {
        let stat = status[Math.floor(Math.random()* status.length)]

        bot.user.setActivity(stat, {type: "WATCHING"})
    }, 3000)
})

bot.login(tokenfile.token);
