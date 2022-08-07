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
11. keys
12. values
13. name
14. toString
15. create
16. is
17. isExtensible
18. getPrototypeOf
19. defineProperty
20. getOwnPropertyDescriptors
21. length
22. getOwnPropertyNames
23. fromEntries
24. prototype
25. defineProperties
26. setPrototypeOf
27. getOwnPropertySymbols
28. getOwnPropertyDescriptor

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

console.log(Object.assign(course, grade, { teacher: "Mrs Water" }));

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
car.manufacture.country = "us";

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

/*

10. entries

*/

// Object.entries() method is used to return an array consisting of enumerable property [key, value] pairs of the object which are passed as the parameter. The ordering of the properties is the same as that given by looping over the property values of the object manually.

// Example: 1

const myEntries = {
    name: 'Prince Khunt',
    age: 16,
    work: "MERN Stack Developer"
};

let entires = Object.entries(myEntries);

console.log(entires);

/*

11. keys

*/

// Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object. The ordering of the properties is the same as that given by looping over the properties of the object manually.

// Example: 1

const todos = {
    id: 1,
    userId: 12154,
    title: "delectus aut autem",
    completed: false
}

for (const key in todos) {
    console.log(todos[key]);
}

Object.keys(todos).forEach((i) => {
    console.log(todos[i]);
})

/*

12. values

*/

// Object.values() method is used to return an array whose elements are the enumerable property values found on the object. The ordering of the properties is the same as that given by the object manually is a loop is applied to the properties. 

// Example: 1

let values = Object.values(todos);

console.log(values);

/*

13. name

*/

// The function name property of the javascript object is used to return the name of the function. This name property of the function is only readable and cannot be altered. The name of the function which was given when the function was created is returned by Function.name.

// Example: 1

function dummyName() {

}

console.log(dummyName.name);

/*

14. toString

*/

// The toString() method returns a string as a string. The toString() method does not change the original string. The toString() method can be used to convert a string object into a string.

// Example: 1

let names = ["Prince", "Aman", "Sundar"];

console.log(names.toString());

/*

15. create

*/

// create() method is used to create a new object with the specified prototype object and properties. Object.create() method returns a new object with the specified prototype object and properties.

// Example: 1

const create = Object.create({
    name: "yahoo",
    work: "searching"
});

console.log(create);

/*

16. is

*/

// Object.is() method is used to determine whether two values are the same or not. Two values can be same if they hold one of the following properties: If both the values are undefined.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

/*

17. isExtensible

*/

// Objects are extensible by default they can have new properties added to them, and their [[Prototype]] can be re-assigned. An object can be marked as non-extensible using one of Object.preventExtensions(), Object.seal(), Object.freeze()

// Example: 1

const extensible = {
    action: "Running"
}

console.log(Object.isExtensible(extensible));

/*

18. getPrototypeOf

*/

// The getPrototypeOf() is an inbuilt function in JavaScript which is used to check the prototype of an object that the user has created.

// Example: 1

const prototype = {
    check: true
}

console.log(Object.getPrototypeOf(prototype));

/*

19. defineProperty

*/

// defineProperty() The static method Object. defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

// Example: 1

const ideas = {
    ideaNumber: 1,
    ideaOn: 'Technology',
    author: 'Prince Khunt'
}

/* 

Object.defineProperty(ideas, 'rating', {
    value: 4.9,
    writable: true
});

*/

Object.defineProperty(ideas, 'rating', {
    get: function () {
        return this.author;
    },
    set: function (author) {
        this.author = author
    }
});

ideas.rating = 4.95;
ideas.author = "author";

console.log(ideas);

/*

20. getOwnPropertyDescriptors

*/

// getOwnPropertyDescriptors() method returns all own property descriptors of a given object.

// Example: 1

function Student() {
    this.name = "Same";
    this.hello = function () {
        console.log("Hello")
    }
}

let std = new Student();

/*

Object.defineProperty(std, 'name', {
    writable: false
});

std.name = 'Steve';

console.log(Object.getOwnPropertyDescriptor(std, 'name'));

*/

/*

Object.defineProperty(std, 'name', {
    enumerable: false
});

let studentProperties = Object.keys(std);

console.log(studentProperties);

console.log(Object.getOwnPropertyDescriptor(std, 'name'));

*/

/*

Object.defineProperty(std, 'name', {
    configurable: false
});

delete std.name;

let studentProperties = Object.keys(std);

console.log(studentProperties);

*/

/*

21. length

*/

// Example: 1

const length = {
    car: '12feet',
    truck: '25feet',
    bike: '4feet'
};

console.log(Object.keys(length).length);

/*

22. getOwnPropertyNames

*/

// Example: 1

console.log(Object.getOwnPropertyNames(length).sort());

Object.getOwnPropertyNames(length).forEach((val, idx, array) => {
    console.log(`${val} ${length[val]}`);
});

/*

23. fromEntries

*/

// fromEntries() returns a new object whose properties are specified by the entries of the iterable. The Object.fromEntries() expects the iterable to return an iterator object that produces key-value pairs. It uses the key as the property key of the object and value as the value associated with the property key.

// Example: 1

const map = new Map();

map.set('name', 'dom');
map.set('age', 60);

console.log(Object.fromEntries(map));

// Example: 2

const array = [
    ['search', 'dogs'],
    ['page', 'king']
];

console.log(Object.fromEntries(array));

/*

24. prototype

*/

// The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible. Every function includes prototype object by default. 

// Example: 1

function Obj(){
    this.name;
    this.sayHyy = function(){
        console.log(`${this.name} hyy`);
    }
}

Obj.prototype.getName = function(){
    return this.name;
}

Obj.prototype.setName = function(name){
    this.name = name;
}

let objPrototype = new Obj();

/* 

25. defineProperties

*/