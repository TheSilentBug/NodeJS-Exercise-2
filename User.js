class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
    this.role = "admin";
  }

  deleteUser(user) {
    console.log(`Admin ${this.name} deleted user ${user.name}`);
  }
}

class Customer extends User {
  constructor(name, email, points = 0) {
    super(name, email);
    this.points = points;
  }

  addPoints(amount) {
    this.points += amount;
    return this.points;
  }
}

module.exports = { User, Admin, Customer };
