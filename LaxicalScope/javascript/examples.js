// 1

/*

function a(){
    var b = 10;

    c();

    function c(){
        console.log(b);
    }
}

a();

console.log(b);

*/

// 2

var a = 10; 

var func = function(){
    var b = 20;
    console.log(a, b);

    var innerFunc= function(){
        var c = 30;
        console.log(a, b, c);
    }
    
    innerFunc();
    return;
}

func();

console.log(a);