				// Include

const Discord = require("discord.js")

				// Variable

const client = new Discord.Client();
const PREFIX = "R";
// const EPSITIER = client.channels("514065264837394442");
// const condamné = client.channels("648864507342618635");


				// Events
				// Ready

client.on("ready",  () => {
	console.log("Beep boop");
});

				// Rich Presence

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'Beep boop'
        }
    });
});

				// Tacos

client.on("message", message => {
	if(message.content[0] === PREFIX) {
		if(message.content === "R9 TACOS ?"){
			message.reply("LE TACOS C'EST GRENOBLOIS");
		}
	}
});

				// Ping

client.on("message", message => {
	if(message.content[0] === PREFIX) {
		if(message.content === "R9 ping"){
			// condamné.send("test");
			message.reply("pong");
		}
	}
});

				// Message perso

client.on("message", message => {
	if(message.content[0] === PREFIX) {
		if(message.content === "R9 TEST"){
			message.channel.send("TEST");
			message.author.createDM().then(channel => {
				channel.send("test");
			});
		}
	}
});

				// Message personalisé Théo

// client.on("message", async message => {
// 	if(message.channel instanceof discord.DMChannel) {
// 		if (message.author.id == "133294445016645632") {
// 			console.log("Message envoyé dans le channel !");
// 			var hep = client.guilds.find(g => g.name === "EPSI TIER").channels.find(c => c.name === "condamné");
// 				hep.send(`_${message.content}_ `);
// 		}
// 	}
// })

				// DM New membre

client.on("guildMemberAdd", member => {
	member.createDM().then(channel => {
		return channel.send ("Bienvenue ! " + member.displayName);
	}).catch(console.error);
})

				// Connexion

client.login("")