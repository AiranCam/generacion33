/* 
1. Se requiere conocer la cantidad de letras de una palabra dentro de la frase. La palabrase
se debe seleccionar por su posición.(Quiero saber la longitud de la segunda palabra),
si preguntamos por ua posicion que no existe, se debe regresar un mensaje de error.
2. De la frase, necesitamos eliminar una palabra con base en su posicion y 
regresar la frase sin esa palabra.
3. Se requiere eliminar todas las palabras cortas de la frase, considerando que una palabra 
cortas es aquella que tuebe 3 caracteres o menos, y debemos obtener la frase sin 
esas palabras. 
*/

const frase = ['Que', 'onda','con', 'el', 'amigo', 'como', 'es'];

/* 
Ejercicio 1
Necesito obtener la primera palabra dentro de mi array en base a su posicion, despues de
obtener la palabra, necesito contar la cantidad de letras de esa palabra. Y validar que no
puedo seleccionar una posicion que no exista.
*/

const countLetters = (array, position) => {
    if (position < 0 || position > array.length) {
        return 'La posición no existe';
    }

    return frase[position].length;
}

const letras = countLetters(frase, 10);
console.log(letras);
console.log('--------------------------')


/* 
Ejercicio 2
Primero debemos seleccionar una palabra en base a su posicion, despues de seleccionarla
debemos eliminarla del array y regresar el array sin esa palabra.
*/


const deleteWord = (array, position) => {
    if (position < 0 || position > array.length) {
        return 'La posición no existe';
    }

   array.splice(position, 1);
   return array;
}

const deleteWordTest = deleteWord(frase, 2);
console.log(deleteWordTest);
console.log('--------------------------')

/* 
Ejercicio 3
Primero debemos identificar las palabras dentro de nuestro array cuyas letras sean menor o 
igual a 3, una vez identificadas debemos eliminarlas del array y regresar el array sin esas
 palabras.
*/

const deleteShortWords = (array) => {
    return array.filter(word => word.length > 3);
}

const deleteShortWordsTest = deleteShortWords(frase);
console.log(deleteShortWordsTest);
console.log('--------------------------')

for(let i =frase.length -1; i>=0; i--){
    if (frase[i].length <= 3){
        frase.splice(i,1);
    }
}

console.log(frase);
