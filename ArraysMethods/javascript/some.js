function isEven(element){
    return element % 2 === 0;
}

let numbers = [1, 3, 2, 5, 4];

console.log(numbers.some(isEven));