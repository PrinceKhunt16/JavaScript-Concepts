// 1

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