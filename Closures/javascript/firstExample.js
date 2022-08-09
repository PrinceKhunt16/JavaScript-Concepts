function x(){
    var a = 9;
    function y(){
        console.log(a);
    }
    y();
    a = 19;
    return y;
}

var z = x();

z();