let numbers = [1, 3, 4, 9, 8];

function computeSquare(element) {
  console.log(element * element);
}

numbers.forEach(computeSquare);

// 2

let students = ['John', 'Sara', 'Jack'];

students.forEach(myFunction);

function myFunction(item, index, arr) {
  arr[index] = (index + 1) + ' ' + item;
}

console.log(students);

// 3

Array.prototype.myForEach = function(callback){
  for(let i = 0; i < this.length; i++){
    callback(this[i], i, this);
  }
}

numbers.forEach(computeSquare);