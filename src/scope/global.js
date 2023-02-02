// variables

var a; //declaramos
var b = 'b'; // declaramos y asignamos
b = 'bbb'; // reasignamos
var a = 'aaa'; // redeclaramos

//Global Scope: Si se asignan dentro del documento fuera de una función o un bloque.
var fruit = 'Apple';
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

bestFruit()

function countries(){
    country = 'Colombia'; // global
    console.log(country);
}

countries()
console.log(country)





