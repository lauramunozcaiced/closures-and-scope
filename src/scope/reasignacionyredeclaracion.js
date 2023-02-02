var firstname; //undefined
firstname = 'Oscar'; 
console.log(firstname);

var lastname = 'Muñoz'; // declarar / asignar
lastname = 'Caicedo'; // reasignar
console.log(lastname);

//Reasignar y Redeclarar se puede con var
var secondname = 'David'; // declarar / asignar
var secondname = 'Ana'; // reasignar / redeclarar
console.log(secondname);

//Reasignar pero no Redeclarar con Let?
let fruit = 'Apple'; // declarar / asignar
fruit = 'Kiwi'; // reasignar
//let fruit = 'Banana'; // No se puede redeclarar

//Reasignar o redeclarrar con const?
const persona = 'Laura'; // declarar / asignar
//persona = 'Carlos'; // No se puede reasignar
//const persona = 'Carlos'; // No se puede redeclarar