const user = {
    name: 'Prince Khunt',
    age: 16,
    work: 'Software Developer'
};

let obj = JSON.stringify(user, ['work']);

console.log(obj);

obj = JSON.stringify(user);

console.log(obj);