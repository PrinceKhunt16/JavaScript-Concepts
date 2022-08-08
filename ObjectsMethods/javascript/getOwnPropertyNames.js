// Example: 1

const length = {
    car: '12feet',
    truck: '25feet',
    bike: '4feet'
};

console.log(Object.getOwnPropertyNames(length).sort());

Object.getOwnPropertyNames(length).forEach((val) => {
    console.log(`${val} ${length[val]}`);
});