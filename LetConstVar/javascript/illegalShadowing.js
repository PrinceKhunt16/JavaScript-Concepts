function illegalShadowing(){
    // let d = "Hyy";

    if(true){
        var d = "Hi";
        console.log(d);
    }

    console.log(d);
}

illegalShadowing();