var discordHook = require("./index.js");

let url = "webhook url";
let message = "hello";

discordHook.send(message, url, "myWebhook").then(console.log)