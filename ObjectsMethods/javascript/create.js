// create() method is used to create a new object with the specified prototype object and properties. Object.create() method returns a new object with the specified prototype object and properties.

// Example: 1

const create = Object.create({
    name: "yahoo",
    work: "searching"
});

for (const key in create) {
    console.log(create[key]);
}