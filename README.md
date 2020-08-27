# rf-discord-webhook-sender

a tool to send data to discord webhooks

```javascript
var discordHook = require("./index.js");

let url = "";
let message = "hello";

discordHook.send(message, url, "myWebhook").then(console.log);

```
