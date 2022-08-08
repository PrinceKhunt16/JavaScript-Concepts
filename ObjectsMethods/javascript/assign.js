// Example: 1

const course = {
    name: "web Programming",
    score: 90
};

const grade = {
    score: 98
};

console.log(Object.assign(course, grade, { teacher: "Mrs Water" }));

// Example: 2

const copyObject = Object.assign({}, course, grade);

console.log(copyObject);