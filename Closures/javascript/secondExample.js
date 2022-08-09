var sum = function (x, y, z) {
    return {
        sumTwo: function () {
            return x + y;
        },
        sumThree: function() {
            return x + y + z;
        }
    }
}

var store = sum(4, 5, 6);

console.log(store.sumTwo());

console.log(store.sumThree());