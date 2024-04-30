/* Ejercicios act 4

Ejercicios
1. Saber cuantos caracteres tiene la frase
2. Saber cuantas letras tiene la frase
3. Saber cuantas palabras tiene la frase
4. Obtener la frase en mayusculas
5. Obtener la misma frase pero con todas las letras "a" remplazadas por un "4"
 */

const act = "Que onda amigo, como estas?"


//EJERCICIO 1

const countCharacters = (text) => text.length;
console.log(countCharacters(act));
console.log('--------------------------')


//EJERCICIO 2

/* 
contar cuantas letras tiene la frase
*/

const letras = (text) =>text.match(/[a-zA-Z]/gi).length;
console.log(letras(act));

console.log('--------------------------')
//EJERCICIO 3

/* Separar la frase en palanras, esto es, crear una nueva palabra cada que me encuentre un espacio.
Agregamos a una lista cada palabra encontrada.
Contar cuantas palabras hay en la lista. */

const countWords = (text) => text.split(' ').length;

let countTestOne = countWords('Que onda');
console.log(countWords(act));
console.log('--------------------------')


//EJERCICIO 4

/*
Convertir la frase a mayusculas
 */

const mayusculas = (text) => text.toUpperCase();

console.log(mayusculas(act));
console.log('--------------------------')

//EJERCICIO 5

/* 
 dentificar las letras a de un string
 una vez identificadas tiene que remplarzalas por un 4
 regresar la misma frase con el cambio hecho
*/

const remplazarA = (text) => text.replace(/a/gi, '4');

console.log(remplazarA(act));
