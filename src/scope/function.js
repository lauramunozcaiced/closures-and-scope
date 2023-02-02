//Function Scope o Local Scope: 

function greeting(){
    let username = 'Ana';
    console.log(username);

    (username == 'Ana') ? console.log(`Hola ${username}`) : false;
}

greeting();
//console.log(username) //Lanza error porque está en el scope local.
