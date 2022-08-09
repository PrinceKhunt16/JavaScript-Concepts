// Temporal dead zone is the term to describe the state where variables are in the scope but they are not yet declared. 

function temporalDeadZone(){
    let y = 10;
    const z = 10;

    console.log(x, y, z);

    var x = 10;
    // let y = 10; Before initialization
    // const z = 10; Before initialization
}

temporalDeadZone();