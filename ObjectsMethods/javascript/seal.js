// seal() method of JavaScript seals an object which prevents new properties from being added to it and marks all existing properties as non-configurable. The object to be sealed is passed as an argument, and the method returns the object which has been sealed.

// Example: 1

const cars = {
    name: "indica",
    manufacture: {
        country: "india"
    }
}

Object.seal(cars);
console.log(Object.isSealed(cars));

cars.name = "mercedes";
cars.manufacture.country = "us";

console.log(cars);