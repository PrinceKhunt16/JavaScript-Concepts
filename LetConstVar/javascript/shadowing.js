function shadowing(){
    let c = "Hellow";

    if(true){
        let c = "Hi";
        console.log(c);
    }

    console.log(c);
}

shadowing();