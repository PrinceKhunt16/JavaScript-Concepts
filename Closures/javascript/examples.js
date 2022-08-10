// 1

/*

function x(){
    var a = 9;
    function y(){
        console.log(a);
    }
    y();
    a = 19;
    return y;
}

var z = x();

z();

*/

// 2

/*

var sum = function (x, y, z) {
    return {
        sumTwo: function () {
            return x + y;
        },
        sumThree: function() {
            return x + y + z;
        }
    }
}

var store = sum(4, 5, 6);

console.log(store.sumTwo());

console.log(store.sumThree());

*/

// 3

/*

var e = 10;

function sum(a){
    return function(b){
        return function(c){
            return function(d){
                return a + b + c + d + e;
            }
        }
    }
}

console.log(sum(1)(2)(3)(4));

*/

// 4

/*

let count = 0;

(function printCount(){
    if(count === 0){
        let count = 1; // Shadowing
        console.log(count);
    }

    console.log(count);
})();

*/

// 5

/*

function createBase(num){
    return function(innerNum){
        console.log(innerNum + num);
    }
}

var addFive = createBase(5);

addFive(10);
addFive(20);

*/

// 6

/*

function find(){
    let a = [];

    for(let i = 0; i < 100000; i++){
        a[i] = i * i;
    }

    return function(index){
        console.log(a[index]);
    }
}

const closures = find();

console.time();
closures(6);
console.timeEnd();

console.time();
closures(12);
console.timeEnd();

*/

// 7

/*

function a(length){
    for(var i = 0; i < length; i++){
        function inner(i){
            setTimeout(function log(){
                console.log(i);
            }, i * 1000);
        }

        inner(i);
    }
}

a(5);

*/

// 8

/*

function counter(){
    var counter = 0;

    function add(increment){
        return counter += increment;
    }

    function retrive(){
        return counter;
    }

    return {
        add, 
        retrive
    };
}

const c = counter();
c.add(5);
c.add(15);

console.log(c.retrive());

*/

// 9

/*

let like;

function likeMe(){
    let called = 0;

    return function(){
        if(called > 0){
            console.log('Liked');
        } else {
            like = 'like';
            console.log(like);
            called++;
        }
    }
}

let isLike = likeMe();
isLike();
isLike();
isLike();
isLike();
isLike();

*/

// 10

/*

function once(func, context){
    let run;
    
    return function(){
        if(func){
            run = func.apply(context || this, arguments);
            func = null;
        }

        return run;
    };
}

const hello = once(() => {
    console.log('hello');
})

hello();
hello();
hello();
hello();
hello();

*/

// 11

function myMemoize(fun, context) {
    const res = {};

    return function (...args) {
        var argsCache = JSON.stringify(args);

        if (!res[argsCache]) {
            res[argsCache] = fun.call(context || this, ...args);
        }
        return res[argsCache];
    }
}

const clumsysquare = (num1, num2) => {
    for (let i = 0; i < 100000000; i++) { }

    return num1 * num2;
}

const myMemoizeClumsy = myMemoize(clumsysquare);

console.time();
console.log(myMemoizeClumsy(9467, 7649));
console.timeEnd();

console.time();
console.log(myMemoizeClumsy(9467, 7649));
console.timeEnd();