// 1

/*

const memoizedAdd = () => {
    let cache = {};

    return (n) => {
        if (n in cache) {
            return cache[n];
        }
        else {
            let result = n + 10;
            cache[n] = result;
            return result;
        }
    }
}

const newAdd = memoizedAdd();

console.time();
console.log(newAdd(9));
console.timeEnd();

console.time();
console.log(newAdd(9)); 
console.timeEnd();

*/

// 2

/*

let sum = 0;

const sumN = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }

    return sum;
}

const memoize = (func) => {
    let cache = {};

    return function (num) {
        let n = num;

        if (n in cache) {
            return cache[n];
        } else {
            let result = func(n);
            cache[n] = result;
            return result;
        }
    }
}

const effecient = memoize(sumN);

console.time();
effecient(10000);
console.timeEnd();

console.time();
effecient(10000);
console.timeEnd();

*/

// 3

const memoize = (fn) => {
    let cache = {};
    return (num) => {
        let n = num;

        if (n in cache) {
            return cache[n];
        }
        else {
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}

const factorial = memoize(
    (x) => {
        if (x === 0) {
            return 1;
        }
        else {
            return x * factorial(x - 1);
        }
    }
);

console.log(factorial(5));
console.log(factorial(6));