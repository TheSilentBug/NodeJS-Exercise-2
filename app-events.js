const { Admin, Customer } = require("./User");

require("./logger");

const { deleteUserAction, addPointsAction } = require("./actions");

const admin = new Admin("Reza", "reza@example.com");
const customer = new Customer("Mina", "mina@example.com", 5);

addPointsAction(customer, 20);
deleteUserAction(admin, customer);
