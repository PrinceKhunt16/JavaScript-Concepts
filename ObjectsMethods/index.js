/* 

1. call
2. apply
3. bind
4. assign

*/

/*

1. call

*/

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

/*

2. apply

*/

// The apply() method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).

// Example: 1

const person = {
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

const firstPerson = {
    firstName: "Prince",
    lastName: "Khunt"
}

person.fullName.apply(firstPerson); 

// Exmaple: 2

const numbers = [5, 6, 2, 3, 7];

console.log(Math.max.apply(null, numbers));

console.log(Math.min.apply(null, numbers));

/*

3. bind

*/

// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

// Example: 1

let firstJob = {
    name: "Coding",
};

let printJob = function () {
    console.log(this);
}

let job = printJob.bind(firstJob);

job();

/*

4. assign

*/

// Example: 1

const course = {
    name: "web Programming",
    score: 90
};

const grade = {
    score: 98
};

console.log(Object.assign(course, grade, {teacher: "Mrs Water"}));

// Example: 2

const copyObject = Object.assign({}, course, grade);

console.log(copyObject);