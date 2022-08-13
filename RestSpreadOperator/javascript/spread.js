let names = ["prince", 'rajan', 'krish'];

function getNames(...names){
    console.log(names);
}

getNames(...names);

let students = {
    name: 'prince',
    age: '16',
    hobbies: ['cricket', 'speak english']
};

let newStudent = {
    ...students,
    hobbies: ['cricket']
};

console.log(newStudent);