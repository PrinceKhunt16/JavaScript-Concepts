const numbers = [1, 2, 3, 4, 5, 6];

function sumReducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

let sum = numbers.reduce(sumReducer);
console.log(sum); 

let summation = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(summation);