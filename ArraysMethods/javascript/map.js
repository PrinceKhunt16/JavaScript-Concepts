// 1

/*

let nums = [2, 4, 6, 8, 10];

function square(number) {
  return number * number;
}

let squareNumbers = nums.map(square);
console.log(squareNumbers);

*/

// 2

/*

let nums = [2, 4, 6, 8, 10];

Array.prototype.myMap = function (cb){
  let temp = [];

  for(let i = 0; i < this.length; i++){
    temp.push(cb(this[i], i, this));
  }

  return temp;
}

const addByTwo = nums.myMap((num, i, arr) => {
  return num + 2;
});

console.log(addByTwo);

*/

// 3

/*

let students = [
  { 
    name: 'Piyush',
    roll: 1,
    mark: 35
  },
  { 
    name: 'Prince',
    roll: 2,
    mark: 33
  },
  { 
    name: 'Peko',
    roll: 4,
    mark: 50
  },
  { 
    name: 'Pen',
    roll: 4,
    mark: 40
  }
];

const names = students.map((s) => s.name.toUpperCase());

console.log(names);

*/