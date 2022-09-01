/*

Check if method is freeze so return true otherwise false

*/

const user = {
    name: "henry",
    address: {
        country: "india"
    }
}

Object.freeze(user);

console.log(Object.isFrozen(user));