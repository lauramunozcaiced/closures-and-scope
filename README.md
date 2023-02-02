# closures-and-scope (Curso Platzi)

Práctica para dominar el tema de los Closures y el Scope

## Qué es el SCOPE?
Determina el alcance para la accesiblidad de una variable.

## Tipos de Scope:

### Global: 
Las variables que se asignan en el archivo fuera de cualquier bloque y se puede acceder a ellas donde sea.

### Function: 
Las variables que se crean dentro de un bloque de código Function y sólo se pueden acceder a ellas en ese mismo bloque.

### Block: 
Discrimina entre var y let - const, donde las últimas no se pueden acceder fuera del bloque, pero las variables var si. (No usar var).

## Reasignación y Redeclaración

Var: Se puede redeclarar y reasignar
Let: Se puede reasignar pero no redeclarar
Const: No se puede reasignar ni redeclarar

## use strict mode: 
No hace hoisting (elevación de variables). Obliga a declarar variables o si no lanza error.
Modo estricto para trabajar.

## Qué es Closure?
Permite acceder al ámbito de una función exterior desde una función interior. Se crean cada vez que una función es creada. Cuando una función accede a una variable fuera de su contexto.

### Ámbito Léxico: 
La accesibilidad de las varibles está dada por la posición de las mismas.

## Hoisting
Javascript inicializa en el inicio del código, todas las variables que están siendo usadas y las define como undefined, Si una variable no está inicializada o definida antes de llamarla, esta retornará como undefined.

## Debugging
Existen formas de hacer debugging con javascript, en esta clase vimos el debugger();