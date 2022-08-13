let numbers = [2, 4, 6, 8, 10];

function square(number) {
  return number * number;
}

let squareNumbers = numbers.map(square);
console.log(squareNumbers);