function sumReducer(accumulator, currentValue) {
    return accumulator + currentValue;
}

function addNumbers(a, b, ...other) {
    const remains = other.reduce(sumReducer);
    return a + b + remains;
}

const res = addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(res);

let students = {
    name: 'prince',
    age: '16',
    hobbies: ['cricket', 'speak english']
};

const {age, ...rest} = students;

console.log(age, rest);