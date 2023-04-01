function *generators() {
    let index = 0;

    while(true){
        yield index++;
    }
}

const numbers = generators();

console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)
console.log(numbers.next().value)