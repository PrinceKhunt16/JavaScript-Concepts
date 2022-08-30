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

function CurrentAccount(customerName, balance = 0, loan = 0){
    BankAccount.call(this, customerName, balance);
    this.loan = loan;
    this.transactionLimit = 2000;
}

CurrentAccount.prototype = Object.create(BankAccount.prototype);

CurrentAccount.prototype.takeBusinessLone = function(amount){
    this.loan += amount;
}

const johnAccount = new CurrentAccount('john', 0, 0);
johnAccount.deposit(2000);
johnAccount.takeBusinessLone(1000);

console.log(johnAccount);