class BankAccount{
    #balance = 0;

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    set balance(amount){
        this.#balance = amount;
    }

    get balance() {
        return this.#balance;
    }
}

class CurrentAccount extends BankAccount {
    transactionLimit = 50000;
    loan = 0;

    constructor(customerName, balance = 0){
        super(customerName, balance);
    }

    #setLoan(amount) {
        this.loan = amount;
    }

    takeBusinessLoan(amount) {
        this.#setLoan(amount);
    }
}

const johnAccount = new CurrentAccount('john', 1000);
johnAccount.takeBusinessLoan(1000);

console.log(johnAccount);