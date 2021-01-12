// v1.js

const Discord = require("discord.js");
const Logger = require("rf-logger");
const logger = new Logger("rf-discord-webhook-sender")



function DiscordHook(name, url, settings = {}, debug) {
	var webhookId;
	var webhookToken;
	var config = {
		username: name,
		avatarURL: settings.avatar || "",
		embeds: settings.embeds || []
	};

	this.send = (data, customName) => {

		try {
			if (data == undefined || data == "") {
				throw new Error("cannot send empty message")
			} else if (url == undefined || typeof url !== 'string' || url == '') {
				throw new Error('check hook URL');
			} else if (!url.startsWith('https://discord.com/api/webhooks/')) {
				if (debug) logger.debug(url)
				throw new Error('check if this is a discord webhook URL');
			} else {
				if (url.match(/(?!webhooks\/)\d.+?(?=\/)/g)) {
				if (debug)logger.debug(webhookId)
					webhookId = url.match(/(?!webhooks\/)\d.+?(?=\/)/g)[0];
				};
				if (url.match(/(?<=\d\/).+?$/g)) {
				if (debug)logger.debug(webhookToken)
					webhookToken = url.match(/(?<=\d\/).+?$/g)[0];
				}; 
			};

			const hook = new Discord.WebhookClient(webhookId, webhookToken);
			if (customName) config.username = customName
			return hook.send(data, config)
		} catch(e) {
			console.error(e)
		};

	}
};

module.exports = DiscordHook