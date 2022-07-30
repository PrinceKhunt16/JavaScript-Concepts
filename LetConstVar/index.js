// 1.Scope
// 2.shadowing
// 3.Illegal Shadowing
// 4.Declaration
// 5.Decalaration without initialization
// 6.Re-Initialization
// 7.Temporal Dead Zone

// 1.Scope 

var a = 5;

function scope(){
    console.log(a);
}

scope();

{
    var b = 4;
}

console.log(b);


// 2.Shadowing

function shadowing(){
    let c = "Hellow";

    if(true){
        let c = "Hi";
        console.log(c);
    }

    console.log(c);
}

shadowing();


// 3.Illegal Shadowing

function illegalShadowing(){
    // let d = "Hyy";

    if(true){
        var d = "Hi";
        console.log(d);
    }

    console.log(d);
}

illegalShadowing();


// 4.Declaration

// Var can redeclaration 
var e;
var e;

// let cannot redeclaration
let f;

// const cannot redeclaration
const h = null;


// 5.Decalaration without initialization

// Var can 
var e;
var e;

// let can
let j;

// const cannot
const k = 0;


// 6.Re-Initialization

// var can Re-Initialization
var l = 10;
l = 20;

// var can Re-Initialization
let m = 10;
m = 20;

// var cannot Re-Initialization
const n = 10;


// 7.Temporal Dead Zone

// Temporal dead zone is the term to describe the state where variables are in the scope but they are not yet declared. 

function temporalDeadZone(){
    let y = 10;
    const z = 10;

    console.log(x, y, z);

    var x = 10;
    // let y = 10; Before initialization
    // const z = 10; Before initialization
}

temporalDeadZone();