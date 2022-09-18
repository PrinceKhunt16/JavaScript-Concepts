// 1

/*

function x(){
    for (var i = 1; i <= 5; i++) {
        function x(i) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        }
        
        x(i);
    }  

    console.log("Hey");
}

x();

*/

// 2

console.log('start');

function importantAction(userName){
    setTimeout(() => {
        return userName;
    }, 1000);
}

const message = importantAction('Prince Khunt')

console.log(message);

console.log('end');