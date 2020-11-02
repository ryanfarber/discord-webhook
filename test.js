var DiscordHook = require("./index.js");

let url = "https://discord.com/api/webhooks/..."
let message = "hello";

var hook = new DiscordHook("webhook name", url, false)

hook.send(message)
// send message from default webhook name
hook.send(message, "override name")
// enter a string as the second argument to override the default name