function me(){
    if(true){
        let hello = 'hyy';
        const hyy = 'hello';
        console.log(hello + ' by Inside');
        console.log(hyy + ' by Inside');
    }

    console.log(hello + ' by Outside');
    console.log(hyy + ' by Outside');
}

me();