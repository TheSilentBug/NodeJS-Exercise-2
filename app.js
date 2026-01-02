const { Admin, Customer } = require("./User"); 

console.log("App started...");

const admin = new Admin("Ali", "ali@example.com");
const customer = new Customer("Sara", "sara@example.com", 10);

console.log(admin.getInfo());
console.log(customer.getInfo());

customer.addPoints(25);
console.log("Customer points:", customer.points);

admin.deleteUser(customer);

console.log("App finished.");
