class BankAccount{
    constructor(customerName, balance = 0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }
}

const johnAccount = new BankAccount('john', 10000);
johnAccount.deposit(2000);

console.log(johnAccount);