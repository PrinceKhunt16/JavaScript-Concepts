// 1

/*

let numbers = [1, 2, 3, 4];

function sumReducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

let sum = numbers.reduceRight(sumReducer);
console.log(sum);

*/

// 2

const add = (x) => {
  return x + 2;
}

const subtract = (x) => {
  return x - 2;
}

const multiply = (x) => {
  return x * 2;
}

const compose = (...fns) => (val) => {
  const ans = fns.reduceRight((prev, fn) => {
    return fn(prev)
  }, val);

  return ans;
}

const compResult = compose(multiply, subtract, add)(4);
console.log(compResult);

const pipe = (...fns) => (val) => {
  const ans = fns.reduce((prev, fn) => {
    return fn(prev)
  }, val);

  return ans;
}

const pipeResult = pipe(multiply, subtract, add)(6);
console.log(pipeResult);