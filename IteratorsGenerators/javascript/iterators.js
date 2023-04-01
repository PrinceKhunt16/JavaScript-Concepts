function iterator(values) {
    let nextIndex = 0;

    return {
        next: function() {
            if(nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];

const fruits = iterator(myArray);

console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value || fruits.next().done)