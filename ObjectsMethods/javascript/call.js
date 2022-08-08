// The call() method calls a function by passing this and specified values as arguments.

// Example: 1

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

// Example: 2

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

// Example: 3

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