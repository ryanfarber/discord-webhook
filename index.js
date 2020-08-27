// index.js

const Discord = require("discord.js");

async function send(data, url, name, settings = {}) {
	var webhookId;
	var webhookToken;
	var config = {
		username: name || "webhook",
		avatarURL: settings.avatar || "",
		embeds: settings.embeds || []
	};

	try {
		if (data == undefined || data == "") {
			throw new Error("cannot send empty message")
		} else if (url == undefined || typeof url !== 'string' || url == '') {
			throw new Error('check hook URL');
		} else if (!url.startsWith('https://discordapp.com/api/webhooks/')) {
			throw new Error('check if this is a discord webhook URL');
		} else {
			if (url.match(/(?!webhooks\/)\d.+?(?=\/)/g)) {
				webhookId = url.match(/(?!webhooks\/)\d.+?(?=\/)/g)[0];
			};
			if (url.match(/(?<=\d\/).+?$/g)) {
				webhookToken = url.match(/(?<=\d\/).+?$/g)[0];
			}; 
		};

		const hook = new Discord.WebhookClient(webhookId, webhookToken);
		return hook.send(data, config)
	} catch(e) {
		console.error(e)
	};
};

module.exports = {
	send
}