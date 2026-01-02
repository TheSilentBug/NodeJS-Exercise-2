const emitter = require("./events");

function sendAlert(message) {
  emitter.emit("alert", message);
}

module.exports = { sendAlert };
