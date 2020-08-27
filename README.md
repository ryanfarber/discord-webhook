# rf-discord-webhook-sender

a tool to send data to discord webhooks

`discordHook.send("data", "webhook url", "webhookname (optional)", {avatar: "avatar url", embeds: ["embed urls"]})`

```javascript
var discordHook = require("rf-discord-webhook-sender");

let url = "";
let message = "hello";

discordHook.send(message, url, "myWebhook").then(console.log);

```
