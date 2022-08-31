class User{
    static cache = 1;

    constructor(name, age, income){
        this.name = name;
        this.age = age;
        this.income = income;
        this.id = User.id++;
    }

    static compareByAge(userOne, userTwo){
        return userOne.age - userTwo.age;
    }

    static compareByIncome(userOne, userTwo){
        return userOne.income - userTwo.income;
    }

    static hasInCache(){
        return true;
    }
}

const john = new User('john', 20, 78654);
const pen = new User('pen', 18, 56522);
const ben = new User('ben', 23, 98962);

const users = [john, pen, ben];

users.sort(User.compareByAge);
users.sort(User.compareByIncome);
console.log(User.cache);
console.log(users);
console.log(User.hasInCache());