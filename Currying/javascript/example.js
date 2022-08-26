// 1

/*

function add(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

let output = add(1)(2)(3);
console.log(output);

*/

// 2

/*

const user = {
    name: 'john',
    age: 20
}

function userInfo(obj){
    return function(userInfo){
        return obj[userInfo];
    }
}

let output = userInfo(user)('name');
console.log(output);

*/

// 3

function add(a){
    return function(b){
        if(b){
            return add(a + b);
        }

        return a;
    }
}

console.log(add(1)(2)(3)(4)());