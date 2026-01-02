const { sendAlert } = require("./alertSender");
require("./alertListener");
sendAlert("Server is starting...");
sendAlert("High CPU usage detected!");
sendAlert("New login from an unknown device.");
