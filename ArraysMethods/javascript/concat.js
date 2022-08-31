/*

It is use for array copy

*/

let primeNumbers = [2, 3, 5, 7]
let evenNumbers = [2, 4, 6, 8]

let joinedArrays = primeNumbers.concat(evenNumbers);
console.log(joinedArrays);

let copyArray = [].concat(evenNumbers);

console.log(copyArray);