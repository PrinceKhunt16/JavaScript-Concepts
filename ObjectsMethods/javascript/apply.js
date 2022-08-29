// The apply() method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).

// Example: 1

/*

const person = {
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

const firstPerson = {
    firstName: "Prince",
    lastName: "Khunt"
}

person.fullName.apply(firstPerson);

// Exmaple: 2

const numbers = [5, 6, 2, 3, 7];

console.log(Math.max.apply(null, numbers));

console.log(Math.min.apply(null, numbers));

*/

// 2

/*

const array = ['a', 'b'];
const elements = [0, 1, 2];

array.push.apply(array, elements);

console.log(array);

*/

// 3 

/*

const numbers = [4, 5, 6, 3, 2, 9];

console.log(Math.min.apply(null, numbers) ,Math.max.apply(null, numbers));

*/

// 4

let car = {
    color: 'red',
    company: 'ferrari'
}

function purchaseCar(currency, price){
    console.log(this.color, this.company, currency, price);
}

Function.prototype.myApply = function(context = {}, args = []){
    if(typeof this !== 'function'){
        throw new Error(this + 'is not callable');
    }

    if(!Array.isArray(args)){
        throw new TypeError('CreateListFromArrayLike called on non-object');
    }

    context.fn = this;
    context.fn(...args);
}

purchaseCar.myApply(car, ['ruppes', 5000000]);