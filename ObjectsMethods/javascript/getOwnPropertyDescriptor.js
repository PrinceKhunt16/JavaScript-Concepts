// getOwnPropertyDescriptor() method returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain)

// Example: 1

function Student() {
    this.name = "Same";
    this.hello = function () {
        console.log("Hello")
    }
}

let std = new Student();

Object.defineProperty(std, 'name', {
    writable: false
});

std.name = 'Steve';
console.log(Object.getOwnPropertyDescriptor(std, 'name'));

Object.defineProperty(std, 'name', {
    enumerable: false
});

let studentProperties = Object.keys(std);

console.log(studentProperties);
console.log(Object.getOwnPropertyDescriptor(std, 'name'));

Object.defineProperty(std, 'name', {
    configurable: false
});

delete std.name;

studentProperties = Object.keys(std);
console.log(studentProperties);