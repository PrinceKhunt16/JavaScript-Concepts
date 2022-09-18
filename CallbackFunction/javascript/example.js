// 1

/*

function x(n, y){
    console.log('before in x');

    y(n);

    console.log('after in x');
}

function y(n){
    console.log('callback' + ' ' + n);
}

setTimeout(x, 1000, 'John', y);

*/

// 2

/*

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

*/

// 3

/*

function scoreboard(num, time, onSuccess, onFail){
    setTimeout(() => {
        if(num){
            console.log('Wicket gone', num);
            onSuccess();
        } else {
            onFail();
        }
    }, time);
}

scoreboard(1, 1000, () => {
    scoreboard(2, 1000, () => {
        scoreboard(3, 1000, () => {
            scoreboard(4, 1000, () => {
                scoreboard(5, 1000, () => {
                    scoreboard(6, 1000, () => {
                        scoreboard(7, 1000, () => {
                            scoreboard(8, 1000, () => {
                                scoreboard(9, 1000, () => {
                                    console.log('All Out');
                                },() => {console.log('nooooohhh')});
                            },() => {console.log('nooooohhh')});
                        },() => {console.log('nooooohhh')});
                    },() => {console.log('nooooohhh')});
                },() => {console.log('nooooohhh')});
            },() => {console.log('nooooohhh')});
        },() => {console.log('nooooohhh')});
    },() => {console.log('nooooohhh')});
},() => {console.log('nooooohhh')});

*/

// 4

console.log('start');

function importantAction(userName, cb){
    setTimeout(() => {
        cb(userName)
    }, 1000);
}

const message = importantAction('Hellow guys', function(message){
    console.log(message);
});

console.log(message);

console.log('end');