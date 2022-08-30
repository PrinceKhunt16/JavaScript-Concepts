function BankAccount(customerName, balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
}

BankAccount.prototype.withDraw = function(amount){
    this.balance -= amount;
}

const johnAccount = new BankAccount('john', 1000);
johnAccount.deposit(10000);

console.log(johnAccount);