class Account {
  constructor(owner) {
    this.owner = owner;
    this.balance = 0;
  }

  credit(amount) {
    this.balance += amount;
  }

  describe() {
    return `owner: ${this.owner}, balance: ${this.balance}`;
  }
}

module.exports = Account;