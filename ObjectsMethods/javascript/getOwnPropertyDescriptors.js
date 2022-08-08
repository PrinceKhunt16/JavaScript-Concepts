// getOwnPropertyDescriptors() method in JavaScript is standard built-in objects which returns all property descriptors of a given object.

function Teacher() {
    this.name = "Heme";
    this.hello = function () {
        console.log("Hello")
    }
}

let teacher = new Teacher();

Object.defineProperty(teacher, 'name', {
    writable: false
});

console.log(Object.getOwnPropertyDescriptors(teacher));