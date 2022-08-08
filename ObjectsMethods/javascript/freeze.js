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