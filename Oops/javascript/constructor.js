function BankAccount(customerName, balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function(amount){
        this.balance += amount;
    }

    this.withdraw = (amount) => {
        this.balance -= amount;
    }
}

const johnAccount = new BankAccount('john', 1000);
johnAccount.deposit(2000);
johnAccount.withdraw(1000);
  
const penAccount = new BankAccount('pen');
penAccount.deposit(1200);
penAccount.withdraw(750);

console.log(johnAccount, penAccount);