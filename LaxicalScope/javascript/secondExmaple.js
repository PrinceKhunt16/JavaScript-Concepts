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