// 1

const radius = [1, 2, 3, 4, 5];

const area = function(radius){
    return Math.PI * radius * radius;
}
 
const cicumference = function(radius){
    return 2 * Math.PI * radius;
}

const diameter = function(radius){
    return 2 * radius;
}

const calculate = function(arr, func){
    const output = [];

    for(let i = 0; i < arr.length; i++){
        output.push(func(arr[i]));
    }

    return output; 
} 

Array.prototype.makePrototypeCalculate = function(func){
    const output = [];

    for(let i = 0; i < this.length; i++){
        output.push(func(this[i]));
    }

    return output; 
}

console.log(radius.map(area));
console.log(radius.makePrototypeCalculate(area));
console.log(calculate(radius, area));
console.log(calculate(radius, cicumference));
console.log(calculate(radius, diameter));