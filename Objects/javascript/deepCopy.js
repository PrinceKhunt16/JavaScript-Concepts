const user = {
    name: 'John',
    age: 58
}

let objClone = Object.assign({}, user);

console.log(objClone);

objClone = JSON.parse(JSON.stringify(user));

console.log(objClone);

objClone = {...user};

console.log(objClone);