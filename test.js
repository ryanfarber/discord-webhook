var discordHook = require("./index.js");

let url = "";
let message = "hello";

discordHook.send(message, url, "myWebhook").then(console.log);