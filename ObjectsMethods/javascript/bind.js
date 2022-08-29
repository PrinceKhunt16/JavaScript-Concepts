// 1

/*

let firstJob = {
    name: "Coding",
};

let printJob = function () {
    console.log(this);
}

let job = printJob.bind(firstJob);

job();

*/

// 2

/*

let person = {
    firstName: "John",
    lastName: "Doe"
}

function printAboutYou(city, state){
    console.log(this.firstName + ' ' + this.lastName + ' ' + city + ' ' + state);
}

Function.prototype.myBind = function(...args){
    let context = this;
    params = args.slice(1);

    return function(...innerArgs){
        context.apply(args[0], [...params, ...innerArgs]);    
    }
}

let printAboutYouAdvance = printAboutYou.myBind(person, 'Surat');
printAboutYouAdvance('Gujarat');

*/

// 3

/*
 
function f(){
    console.log(this);
}

let user = {
    g: f.bind(null);
}

user.g();

*/

// 4 

/*

function f(){
    console.log(this.name);
}

f = f.bind({name: 'john'}).bind({name: 'pen'});

f();

*/

// 5

/*

function checkPassword(success, failed){
    let password = prompt('password', '');
    if(password == 'john'){
        success();
    } else {
        failed();
    }
}

let user = {
    name: 'john',
    loginSuccessful(){
        console.log(this.name, 'loginSuccessful');
    },
    loginFaield(){
        console.log(this.name, 'loginFaield');
    }
}

checkPassword(user.loginSuccessful.bind(user), user.loginFaield.bind(user));

*/