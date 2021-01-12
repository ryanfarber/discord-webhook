var DiscordHook = require("./index.js");

let url = "https://discord.com/api/webhooks/..."
let message = "hello there my name is bob";

let hook = new DiscordHook({
	name: "webhook test",
	url: "https://discord.com/api/webhooks/740519024391225406/-ZkaYhjWOZknbBfDN5CaYCV-pftLQx3WaTJTzJItxkjVqgEELSYIzNnGd_VNd1ZWS8yh",
	avatar: "https://media.tenor.com/images/1c4edacf0c4f3057c26f5fa130822970/tenor.png"
})


hook.send(message)
// send message from default webhook name
hook.send(message, {name: "override name", avatar: "http://www.overrideavatar.com/image.jpg"})
// enter a string as the second argument to override the default name