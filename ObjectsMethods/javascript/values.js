// Object.values() method is used to return an array whose elements are the enumerable property values found on the object. The ordering of the properties is the same as that given by the object manually is a loop is applied to the properties. 

// Example: 1

const employer = {
    id: 1,
    userId: 12154,
    title: "delectus aut autem",
    completed: false
}

let values = Object.values(employer);

console.log(values);