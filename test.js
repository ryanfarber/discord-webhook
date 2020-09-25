var DiscordHook = require("./index.js");

let url = "webhook url";
let message = "hello";

var hook = new DiscordHook("web hook name", url)

hook.send("hello")