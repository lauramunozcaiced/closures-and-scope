//Block Scope:

function fruits(){
    if(true){
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
        console.log(fruit1,fruit2,fruit3);
    }
    console.log(fruit1);

}

fruits()