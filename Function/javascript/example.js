// Function Statement 

function a(){
    console.log('Function Statement');
}

a();

// Function Expression

var b = function(){
    console.log('Function Expression');
}

b();

// Anonymous Function

/*

function(){
    console.log('Anonymous Function');
}

*/

// Named Funciton Expression

var c = function named(){
    console.log(named);
}

c();

var obj = {
    x: function(){
       console.log(typeof x);   
       console.log(obj.x.name); 
    },
    y: function y(){
       console.log(typeof y);   
       console.log(obj.y.name); 
    }
};

obj.x();
obj.y();

/*

setTimeout(function sayMoo() {
    console.log('Moo');
    setTimeout(sayMoo, 10000);
}, 1000);

*/

// Difference between parameters and arguments ?

// parameters
var d = function(x, y){
    console.log(x + y);
}

// arguments
d(10, 20);

// First Class Function

function func(){
    console.log('argument function')
}

var f = function(func){
    func();
    
    return function g(){
        console.log('return function')
    }
}
 
var fun = f(func);
fun();