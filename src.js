// index.js

const Discord = require("discord.js")
const Logger = require("@ryanforever/logger")
const logger = new Logger("discord-webhook", {debug: true})
const {inherits} = require("util")


function DiscordHook(settings = {}) {

	if (!settings.url) throw new ERROR("MISSING_URL")
	let url = settings.url
	let debug = settings.debug || false
	let {id, token} = parseUrl(url)
	const client = new Discord.WebhookClient({id, token})
	this.name = settings.name || undefined
	this.config = {
		username: this.name,
		avatarURL: settings.avatar || "",
		embeds: settings.embeds || []
	}


	// SEND //
	this.send = async function (data, config = {}) {
		if (!data) throw new ERROR("EMPTY_MESSAGE")
		logger.debug("sending webhook...")
		this.config.username = this.name || config.name
		if (config.avatar) this.config.avatarURL = config.avatar
			console.log(this.config)
		return await client.send(data, this.config)
	}

	// EDIT //
	this.edit = async function(message, newMessage, config = {}) {
		if (!message) throw new ERROR("MISSING_MESSAGE")
		if (!newMessage) throw new ERROR("MISSING_EDIT")
		return await client.editMessage(message, newMessage)
	}

	// DELETE //
	this.delete = async function(message) {
		logger.debug("deleting message...")
		if (!message) throw new ERROR("MISSING_MESSAGE")
		return await client.deleteMessage(message)
	}

	// PARSE URL // returns a webhook id and token from a given discord webhook url
	function parseUrl(url) {
		if (!url) throw new ERROR("MISSING_URL")
		logger.debug("parsing url...")
		let id, token
		if (!url.startsWith("https://discord.com/api/webhooks/")) return
		let idMatch = url.match(/(?!webhooks\/)\d.+?(?=\/)/g)
		let tokenMatch = url.match(/(?<=\d\/).+?$/g)
		if (idMatch) id = idMatch[0]
		if (tokenMatch) token = tokenMatch[0]
		return {id, token}
	}
}



// ERROR HANDLER //
class ERROR extends Error {
	constructor(input) {
		super()
		this.name = "DISCORD WEBHOOK ERROR"

		let type = {
			MISSING_URL: "please input a discord webhook url",
			EMPTY_MESSAGE: "you must supply content to send",
			MISSING_MESSAGE: "you must supply a message object",
			MISSING_EDIT: "please supply content for the edited message"
		}

		if (type[input]) {
			this.message = type[input]
			this.code = input
		} else if (typeof input == "object") {
			this.message = input
		} else {
			this.message = input
		}
	}
}




// inherits(ERROR, Error)

module.exports = DiscordHook