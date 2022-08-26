// 1

let counter = 0;

function getData(){
    console.log(counter++);
}

function myDebounce(call, delay){
    return function (){
        setTimeout(() => {
            call();
        }, delay);
    }
}

const bestFunction = myDebounce(getData, 1000);

// 2

const func = (fn, delay) => {
    return function(){
        document.querySelector('button').disabled = true;

        setTimeout(() => {
            fn();
        }, delay);
    }
}

const throttle = func(() => {
    document.querySelector('button').disabled = false;
    console.log('clicked');
}, 1000);