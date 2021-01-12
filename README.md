# rf-discord-webhook-sender

a tool to send data to discord webhooks

initiate a `new DiscordHook` object with the following parameters:

1) default name of the webhook (string)
2) the url of the webhook (string)
4) (optional) an object containing optional parameters:
- `avatar: "avatar url"`

- `embeds: ["embed urls"]`


`send()` takes multiple arguments:

1) message data
2) optional string to override the default webhook name


```javascript
var DiscordHook = require("./index.js");

let url = "https://discord.com/api/webhooks/..."
let message = "hello there my name is bob";

let hook = new DiscordHook({
	name: "webhook test",
	url: url,
	avatar: "https://media.tenor.com/images/1c4edacf0c4f3057c26f5fa130822970/tenor.png"
})


hook.send(message)
// send message from default webhook name
hook.send(message, {
	name: "override name", 
	avatar: "http://www.overrideavatar.com/image.jpg"
})
// enter a string as the second argument to override the default name
```
