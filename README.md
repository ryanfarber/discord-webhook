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
var DiscordHook = require("rf-discord-webhook-sender");

let url = "https://discord.com/api/webhooks/..."
let message = "hello";

var hook = new DiscordHook("webhook name", url, false)

hook.send(message)
// send message from default webhook name
hook.send(message, "override name")
// enter a string as the second argument to override the default name
```
