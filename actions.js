const eventBus = require("./eventBus");

function deleteUserAction(admin, user) {
  console.log(`Admin ${admin.name} deleted user ${user.name}`);

  eventBus.emit("userDeleted", {
    adminName: admin.name,
    userName: user.name,
  });
}

function addPointsAction(customer, amount) {
  customer.addPoints(amount);

  eventBus.emit("pointsAdded", {
    userName: customer.name,
    amount,
    totalPoints: customer.points,
  });
}

module.exports = { deleteUserAction, addPointsAction };
