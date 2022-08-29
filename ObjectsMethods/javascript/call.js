// The call() method calls a function by passing this and specified values as arguments.

// Example: 1

/*

let firstUser = {
    name: "Prince Khunt",
    age: 16,
    designation: "Software Engineer",
    printDetails: function () {
        console.log(this);
    }
};

firstUser.printDetails();

let secondUser = {
    name: "Rajan Khunt",
    age: 18,
    designation: "Software Engineer",
    printDetails: function () {
        console.log(this.name, this.age, this.designation);
    }
};

firstUser.printDetails.call(secondUser);

*/

// Example: 2

/*

let firstCar = {
    name: "mercedes",
};

let printDetails = function () {
    console.log(this);
}

firstUser.printDetails();

let secondCar = {
    name: "Rolls-Royce",
};

printDetails.call(firstCar);

printDetails.call(secondCar);

*/

// Example: 3

/*

function Animal(name, age) {
    this.name = name;
    this.age = age;
}

function Horse(name, age) {
    Animal.call(this, name, age);
    this.sound = "Neigh";
}

const horse1 = new Horse("Arnold", 8);
console.log(horse1.name, horse1.age, horse1.sound);

*/

// 4

/*

var obj = {
    name: 'john'
}

function sayHellow(age, profession){
    return 'hello ' + this.name + ' ' + age + ' ' + profession;
}

console.log(sayHellow.call(obj, 25, SDE));

*/

// 5

/*

const age = 10;

var person = {
    name: 'john',
    age: 20,
    getAge: function(){
        return this.age;
    }
}

var personTwo = {
    age: 24
}

console.log(person.getAge.call(personTwo));

*/

// 6

/*

var status = "Hyyy";

setTimeout(() => {
    const status = "Smile";

    const data = {
        status: "Hoooo",
        getStatus(){
            return this.status;
        }
    }

    console.log(data.getStatus());
    console.log(data.getStatus.call(this));
}, 0);

*/

// 7

/*

const animals = [
    {
        spacies: 'Lion',
        name: 'king'
    },
    {
        spacies: 'whale',
        name: 'Queen'
    }
];

function printAnimals(i){
    this.print = function(){
        console.log(i, this.spacies, this.name);
    }

    this.print();
}

for(key in animals){
    printAnimals.call(animals[key], key);
}

*/

// 8

/*

const age = 10;

var person = {
    name: 'john',
    age: 20,
    getAge: function(){
        console.log(this.age);
    },
    getAgeArrow: () => {
        console.log(this.age);
    }
}

var personTwo = {
    age: 24
}

person.getAge.call(personTwo);
person.getAgeArrow.call(personTwo);

*/

// 9

let car = {
    color: 'red',
    company: 'ferrari'
}

function purchaseCar(currency, price){
    console.log(this.color, this.company, currency, price);
}

Function.prototype.myCall = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + 'is not callable');
    }

    context.fn = this;
    context.fn(...args);
}

purchaseCar.myCall(car, 'ruppes', 5000000);