// 1 

/*

let obj = {
    a: 'one',
    b: 'tow',
    a: 'three'
};

console.log(obj);

*/

// 2

/*

let nums = {
    a: 100,
    b: 200
};

multiplayByTwo(nums);

function multiplayByTwo(obj){
    for(key in obj){
        if(typeof obj[key] === "number"){
            obj[key] = obj[key] * 2;
        }
    }
}


console.log(nums);

*/

// 3

/*

const a = {};
const b = {key: 'b'};
const c = {key: 'c'};

a[b] = 123;
a[c] = 456;

console.log(a[b]);

*/

// 4

/*

const user = {
    name: 'john',
    roll: 12
};

const strObj = JSON.stringify(user);

console.log(JSON.parse(strObj));

*/

// 5

/*

console.log([...'johndoe']);

*/

// 6

/*

const user = {
    name: 'john',
    age: 23
};

const admin = {
    admin: true, 
    ...user
}

console.log(admin);

*/

// 7

/*

const setting = {
    username: 'johndoe',
    level: 19,
    health: 90
};

const data = JSON.stringify(setting, ['level', 'health']);
console.log(data);

*/

// 8

/*

const user = {
    name: 'john',
    age: 24,
    fullName: {
        first: 'john',
        last: 'doe'
    }
};

const { fullName: {first} } = user;

console.log(first);

*/

// 9

/*

let c = {
    greeting: 'Hey!'
};

let d;

d = c;

c.greeting = 'Hello';
console.log(d.greeting);

*/

// 10

/*

console.log({a: 1} == {a: 1});
console.log({a: 1} === {a: 1});

*/

// 11

/*

let person = {name: 'Lydia'};
const members = [person];
person.name = null;

console.log(members);

*/

// 12

/*

const value = { number: 10 };

const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
}

multiply();
multiply();
multiply(value);
multiply(value);

*/

// 13

/*

function changeRefrence(person){
    person.age = 25;
    person = {
        name: 'john',
        age: 50
    };

    return person;
}

const personObj = {
    name: 'alex',
    age: 30
}

const personObjTwo = changeRefrence(personObj);

console.log(personObj);
console.log(personObjTwo);

*/ 