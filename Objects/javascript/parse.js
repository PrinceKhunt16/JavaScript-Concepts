const user = {
    name: 'Prince Khunt',
    age: 16,
    work: 'Software Developer'
};

let obj = JSON.stringify(user);
console.log(obj);

obj = JSON.parse(obj);
console.log(obj);