let numbers = [1, 2, 3, 4];

function sumReducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

let sum = numbers.reduceRight(sumReducer);
console.log(sum);