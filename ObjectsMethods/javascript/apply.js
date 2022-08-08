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