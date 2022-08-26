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