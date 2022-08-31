/*

It is use for array copy

*/

let numbers = [2, 3, 5, 7, 11, 13, 17];

let newArray = numbers.slice(3, 6);
console.log(newArray);

let copyArray = numbers.slice(0);

console.log("copyArray", copyArray);