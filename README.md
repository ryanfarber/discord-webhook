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
var discordHook = require("rf-discord-webhook-sender");

let url = "";
let message = "hello";

discordHook.send(message, url, "myWebhook").then(console.log);

```
