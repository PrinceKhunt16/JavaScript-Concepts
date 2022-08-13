let fruits = ["Apple", "Grapes", "Banana"];

console.log(Array.isArray(fruits));

console.log(Array.isArray([]));
console.log(Array.isArray(new Array(7))); // true
console.log(Array.isArray(true)); 
console.log(Array.isArray(undefined)); 
console.log(Array.isArray()); 