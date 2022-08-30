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

class CurrentAccount extends BankAccount {
    constructor(customerName, balance = 0, loan = 0) {
        super(customerName, balance);
        this.transactionLimit = 50000;
        this.loan = loan;
    }

    takeBusinessLoan(amount){
        this.loan += amount;
    }
}

const johnAccount = new CurrentAccount('john', 0, 0);
johnAccount.deposit(2000);
johnAccount.takeBusinessLoan(1000);

console.log(johnAccount);