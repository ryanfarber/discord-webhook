# discord-webhook

send messages via discord webhooks

## usage
```javascript
const DiscordHook = require("@ryanforever/discord-webhook");
let hook = new DiscordHook({
	name: "webhook test",
	url: https://discord.com/api/webhooks/...,
	avatar: "https://media.tenor.com/images/1c4edacf0c4f3057c26f5fa130822970/tenor.png"
})


hook.send("hello world")
// send message from default webhook name
hook.send("hello world", {
	name: "new webhook name", 
	avatar: "http://www.overrideavatar.com/image.jpg"
})
// enter a string as the second argument to override the default name
```
