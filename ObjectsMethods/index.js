/* 

1. call
2. apply
3. bind
4. assign
5. freeze
6. isFrozen
7. seal
8. isSealed
9. preventExtensions
10. entries
11. getOwnPropertyDescriptor
12. getOwnPropertyDescriptors
13. getOwnPropertyNames
14. getOwnPropertySymbols
15. getPrototypeOf
16. is
17. isExtensible
18. create
19. defineProperty
20. keys
21. length
22. name
23. fromEntries
24. prototype
25. defineProperties
26. setPrototypeOf
27. toString
28. values

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

/*

5. freeze

*/

// freeze() which is used to freeze an object. Freezing an object does not allow new properties to be added to an object and prevents from removing or altering the existing properties. Object.freeze() preserves the enumerability, configurability, writability and the prototype of the object.

// Example: 1

const profile = {
    name: "henry",
    address: {
        country: "india"
    }
}

Object.freeze(profile);
console.log(Object.isFrozen(profile));

console.log(profile);

// property does not change 
profile.name = "joe";

// inner property does change
profile.address.country = "us";

console.log(profile);

/*

6. isFrozen

*/

// Check if method is freeze so return true otherwise false

// Code available in freeze method

/* 

7. seal

*/

// seal() method of JavaScript seals an object which prevents new properties from being added to it and marks all existing properties as non-configurable. The object to be sealed is passed as an argument, and the method returns the object which has been sealed.

// Example: 1

const car = {
    name: "indica",
    manufacture: {
        country: "india"
    }
}

Object.seal(car);
console.log(Object.isSealed(car));

car.name = "mercedes";
car.manufacture.country ="us";

console.log(car);

/*

8. isSealed

*/

// Check if method is seal so return true otherwise false

// Code available in seal method

/*

9. preventExtensions

*/

// The Object.preventExtensions() method in JavaScript is standard built-in objects which prevents new properties from ever being added to an object.

// Example: 1

const movie = {
    name: "RRR",
    details: {
        director: "Raja Mouli"
    }
};

movie.song = "Nacho Nacho";

Object.preventExtensions(movie);

// Not add any property
movie.time = "180min";

// Delete any available property
delete movie.song;

console.log(movie);