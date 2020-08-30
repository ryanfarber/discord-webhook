var DiscordHook = require("./index.js");

let url = "webhook url";
let message = "hello";

var hook = new DiscordHook(url, "web hook name")

hook.send("hello")