const emitter = require("./events");

emitter.on("alert", (message) => {
  console.log("ALERT:", message);
});
