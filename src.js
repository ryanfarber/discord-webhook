// index.js

const Discord = require("discord.js");
const Logger = require("rf-logger");
const logger = new Logger("rf-discord-webhook-sender")



function DiscordHook(settings = {}) {
	let webhookId;
	let webhookToken;
	let url = settings.url
	let debug = settings.debug || false
	let config = {
		username: settings.name,
		avatarURL: settings.avatar || "",
		embeds: settings.embeds || []
	};

	this.send = (data, override = {}) => {

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

		const client = new Discord.WebhookClient(webhookId, webhookToken);
		if (override.name) config.username = override.name;
		if (override.avatar) config.avatarURL = override.avatar
		return client.send(data, config)
	
	};
};

module.exports = DiscordHook