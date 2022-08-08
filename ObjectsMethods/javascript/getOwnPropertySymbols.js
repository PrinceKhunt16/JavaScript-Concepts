// getOwnPropertySymbols() method in JavaScript is standard built-in objects which returns an array of all symbol property that are present in a given object. 

// Example: 1

let age = Symbol();
let work = Symbol("Good Engineer");

let symbol = {
    name: 'Henry doe',
    class: "M-Tech",
    [age]: 29
};

symbol[work] = "Software Engineer";

let objectSymbols = Object.getOwnPropertySymbols(symbol);

console.log(objectSymbols);
console.log(symbol);
console.log(work.description);