const myGlobal = 0;

function myfunction(){
    const mynumber = 1;
    console.log(myGlobal);

    function parent(){
        const inner = 2;
        console.log(mynumber, myGlobal);

        function child(){
            console.log(inner, mynumber, myGlobal);
        }

        return child();
    }
    return parent();
}

myfunction();