// 1

let counter = 0;

function getData(){
    console.log(counter++);
}

function myDebounce(call, delay){
    let timer;

    return function (){
        let context = this;
        let args = arguments;

        clearTimeout(timer);

        timer = setTimeout(() => {
            call.apply(context, args);
        }, delay);
    }
}

const bestFunction = myDebounce(getData, 500);

// 2

const func = (fn, delay) => {
    let flag = true;
    return function(){
        let context = this;
        let args = arguments;
        if(flag){
            fn.apply(context, args);
            flag = false;

            setTimeout(() => {
               flag = true;
            }, delay);
        }
    }
}

const throttle = func(() => {
    console.log('Seaching');
}, 1000);