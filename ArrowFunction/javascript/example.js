// 1

let sum = (a, b) => {
    let ans = a + b;
    return ans;
}

console.log(sum(5, 7));

// 2

var check = [2, 4, 5, 6, 8].every((e) => (
    e % 2 === 0
));

console.log(check);

// 3

function Person(){
    this.name = 'john',
    this.age = 25,
    this.sayName = function (){
        console.log(this.age);
        console.log(this);

        function funcReg(){
            console.log(this.age);
            console.log(this);
        }

        funcArow = () => {
            console.log(this.age);
            console.log(this);
        }

        funcReg();
        funcArow();
    }
}

let john = new Person();

john.sayName();