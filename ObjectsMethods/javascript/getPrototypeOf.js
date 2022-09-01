// The getPrototypeOf() is an inbuilt function in JavaScript which is used to check the prototype of an object that the user has created.

// Example: 1

const myObject = {
    city: 'Madrid',
    greet(){
        console.log(`Greetings from ${this.city}`);
    }
}

console.log(Object.getPrototypeOf(myObject));