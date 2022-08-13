function isOdd(element){
    return element % 2 !== 0;
}

let numbers = [2, 8, 1, 3, 4];

let odds = numbers.findIndex(isOdd);
console.log(odds);