// fromEntries() returns a new object whose properties are specified by the entries of the iterable. The Object.fromEntries() expects the iterable to return an iterator object that produces key-value pairs. It uses the key as the property key of the object and value as the value associated with the property key.

// Example: 1

const map = new Map();

map.set('name', 'dom');
map.set('age', 60);

console.log(Object.fromEntries(map));

// Example: 2

const array = [
    ['search', 'dogs'],
    ['page', 'king']
];

console.log(Object.fromEntries(array));