var a = 5;

function scope(){
    console.log(a);
}

scope();

{
    var b = 4;
}

console.log(b);