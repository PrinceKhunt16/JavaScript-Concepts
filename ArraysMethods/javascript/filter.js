function isEven(value) {
    return value % 2 == 0;
}

var filtered = [11, 98, 31, 23, 944].filter(isEven);

console.log(filtered);