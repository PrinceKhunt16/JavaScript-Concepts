// Object.entries() method is used to return an array consisting of enumerable property [key, value] pairs of the object which are passed as the parameter. The ordering of the properties is the same as that given by looping over the property values of the object manually.

// Example: 1

const myEntries = {
    name: 'Prince Khunt',
    age: 16,
    work: "MERN Stack Developer"
};

let entires = Object.entries(myEntries);

console.log(entires);