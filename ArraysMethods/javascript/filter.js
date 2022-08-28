// 1

/*

const nums = [1, 2, 3, 4];

function isEven(value) {
    return value % 2 == 0;
}

var filtered = nums.filter(isEven);

console.log(filtered);

*/

// 2

const nums = [1, 2, 3, 4];

Array.prototype.muFilter = function (cb) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }

    return temp;
}

function isEven(value) {
    return value % 2 == 0;
}

const findEven = nums.muFilter((value, index, nums) => {
    return value % 2 == 0;
});

console.log(findEven);

// 2

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

const details = students.filter((s) => s.mark > 33);

console.log(details);

*/