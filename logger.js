const eventBus = require("./eventBus");

eventBus.on("userDeleted", ({ adminName, userName }) => {
  console.log(`[LOG] Admin ${adminName} deleted user ${userName}`);
});

eventBus.on("pointsAdded", ({ userName, amount, totalPoints }) => {
  console.log(`[LOG] ${amount} points added to ${userName}. Total: ${totalPoints}`);
});
