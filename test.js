// test.js

const DiscordHook = require("./index.js");
require("dotenv").config()

let message = "hello there my name is bob";

let hook = new DiscordHook({
	name: "webhook test",
	url: process.env.DISCORD_WEBHOOK,
	avatar: "https://media.tenor.com/images/1c4edacf0c4f3057c26f5fa130822970/tenor.png"
})

// hook.name = "booper"

// console.log(hook)


hook.send(message).then(res => {
	// hook.edit(res, "new message")
	hook.delete()
})
// send message from default webhook name
// hook.send(message, {name: "override name", avatar: "http://www.overrideavatar.com/image.jpg"})
// enter a string as the second argument to override the default name