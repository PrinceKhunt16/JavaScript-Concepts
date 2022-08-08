const car = {
    name: "indica",
    manufacture: {
        country: "india"
    }
}

Object.seal(car);

console.log(Object.isSealed(car));