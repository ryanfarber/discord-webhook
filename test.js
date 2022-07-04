// test.js

const DiscordHook = require("./index.js")
require("dotenv").config()

let hook = new DiscordHook({
	name: "webhook test",
	url: process.env.DISCORD_WEBHOOK,
	avatar: "https://media.tenor.com/images/1c4edacf0c4f3057c26f5fa130822970/tenor.png"
})

let secs = 2


hook.send(`[webhook test] this message will change in ${secs} seconds`).then(res => {
	setTimeout(() => {
		hook.edit(res, "hello world! 🌎\nthis message will delete in 2 seconds").then(res => {
			setTimeout(() => hook.delete(res), 2000)
		})
	}, secs * 1000)
})
// send message from default webhook name
// hook.send(message, {name: "override name", avatar: "http://www.overrideavatar.com/image.jpg"})
// enter a string as the second argument to override the default name