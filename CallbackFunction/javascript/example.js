// 1

function x(n, y) {
    console.log('before in x');

    y(n);

    console.log('after in x');
}

function y(n) {
    console.log('callback' + ' ' + n);
}

setTimeout(x, 1000, 'John', y);

// 2

const words = ['Hey', 'Jone', 'doe'];

const show = (func) => {
    setTimeout(() => {
        func(words[0]);
        setTimeout(() => {
            func(words[1]);
            setTimeout(() => {
                func(words[2]);
            }, 2000);
        }, 2000);
    }, 2000);
}

function print(word){
    console.log(word);
}

show(print);