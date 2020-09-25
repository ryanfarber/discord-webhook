# rf-discord-webhook-sender

a tool to send data to discord webhooks

`send()` takes multiple arguments:

1) data you want to send (string)
2) the url of the webhook (string)
3) (optional) name of the webhook (string)
4) (optional) an object containing optional parameters:

- `avatar: "avatar url"`

- `embeds: ["embed urls"]`

```javascript
var DiscordHook = require("rf-discord-webhook-sender");

let url = "https://discordapp.com/api/webhooks/...";

var hook = new DiscordHook("web hook name", url)

hook.send("hello")

```
