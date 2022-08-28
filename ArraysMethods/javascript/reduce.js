// 1

/*

const nums = [1, 2, 3, 4, 5, 6];

function sumReducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

let sum = nums.reduce(sumReducer);
console.log(sum); 

let summation = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(summation);

*/

// 2 

const nums = [1, 2, 3, 4];

Array.prototype.muReduce = function(cb, initialValue){
  var accumulator = initialValue;

  for(let i = 0; i < this.length; i++){
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
}

const addByTwo = nums.muReduce((acc, curr, i, nums) => {
  return acc + curr;
});

console.log(addByTwo);