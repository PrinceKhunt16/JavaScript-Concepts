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