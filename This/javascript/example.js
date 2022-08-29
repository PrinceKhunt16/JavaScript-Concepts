// 1

/*

function createCounter(){
    return {
        count: 0,
        increment: function(){
            this.count++;
            console.log(this);
        }
    }
}

let one = createCounter();
let two = createCounter();

one.increment();
two.increment();
two.increment();

console.log(one, two);

*/

// 2

/*

var count = 0;
function incrementCounter(){
    this.count++;
    console.log(this);
}

incrementCounter();
incrementCounter();
incrementCounter();

console.log(count);

*/

// 3

/*

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this, tag);
        }, this);
    }
};

video.showTags();

*/

// 4

/*

let user = {
    name: 'john',
    age: 24,
    childObj: {
        newName: 'Coder',
        getDetails(){
            console.log(this.newName, this.name);
        }
    },
    details: function (){
        console.log(this.name);

        const nestedArrow = () => {
            console.log(this.name);
        }

        nestedArrow();
    },
    arrowFunc: () => {
        console.log(this);
        console.log(this.name);
    }
}

user.childObj.getDetails();

*/

// 5

/*

class User {
    constructor(n){
        this.name = n;
    }

    getName = () => {
        console.log(this.name);
    }
}

const john = new User('john');
john.getName();

*/

// 6

/*

const user = {
    firstName: 'john',
    getName(){
        const firstName = 'pen'
        return this.firstName;
    }
}

console.log(user.getName());

*/

// 7

/*

function makeUser(){
    return {
        name: 'john',
        propRef: this,
        funcRef(){
            return this;
        }
    }
}

let user = makeUser();

console.log(user.propRef.name);
console.log(user.funcRef().name);

*/

// 8

/*

const user = {
    name: 'john',
    logMessage(){
        console.log(this.name);
    }
}

setTimeout(function(){
    user.logMessage();
}, 1000);

setTimeout(user.logMessage, 1000);

*/

// 8

/*

const user ={
    name: 'john',
    greet(){
        return this.name;
    },
    farewell: () => {
        return this.name;
    }
}

console.log(user.greet());
console.log(user.farewell());

*/

// 9

/*

let calculater = {
    read(){
        this.a = +prompt('', 0);
        this.b = +prompt('', 0);
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
};

calculater.read();
console.log(calculater.sum());
console.log(calculater.mul());

*/

// 10

/*

var length = 4;

function cb(){
    console.log(this.length);
}

const obj = {
    length: 5,
    method(fun){
        fun();
    }
}

obj.method(cb);

*/

// 11

/*

var length = 4;

function cb(){
    console.log(this.length);
}

const obj = {
    length: 5,
    method(){
        console.log(arguments);
        arguments[0]();
    }
}

obj.method(cb, 2, 3);

*/

// 12

let calc = {
    total: 0,
    add(a){
        this.total += a;
        return this;
    },
    multiply(a){
        this.total *= a;
        return this;
    },
    subtract(a){
        this.total -= a;
        return this;
    }
};

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);