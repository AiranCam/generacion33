/* 
1.- Necesitamos poder entregar las iniciales del nombre de una persona, considerando 
unicamente primer nombre, apellido paterno y apellido materno.
input: 'Juan Perez Rodriguez'
output: 'JPR'

2.- Necesitamos una ruleta de nombres, es decir de una lista de nombres debemos poder
obtener un nombre aleatorio. El nombre seleccionado debe ser eliminado de la lista original
para poder volver a usar la ruleta. Cuando ya no haya nombres debe avisar qqe no hay nombres
*/


/* 
Solucion:
Primero necesitamos separa el nombre completo por palabras, despues de separar las palabras
necesitamos obtener la primera letra de cada palabra, para finalmente unirlas en un solo string
*/
console.log('Ejercicio 1: ');

const nombreCompleto = 'Airan Campos Vazquez';

const nombre  = (nombre) => {
    const palabras = nombre.split(' ');
    let iniciales = '';
    palabras.forEach(palabra => {
        iniciales += palabra[0];
    });

    return iniciales;
}

const iniciales = nombre(nombreCompleto);
console.log(iniciales);
console.log('----------------------------')

/* 
Solucion:
Para la ruleta de nombres necesitamos un arreglo de nombres, despues necesitamos obtener 
un nombre aleatorio, para finalmente eliminar el nombre seleccionado del arreglo original
*/

console.log('Ejercicio 2: ');

const nombres = ['Kim', 'Airan', 'Gabi', 'Pad', 'Sani', 'Fer', 'Chava'];

const ruleta = (nombres) => {
    while(nombres.length > 0){
        const random = Math.floor(Math.random() * nombres.length);
        console.log(nombres[random]);
        nombres.splice(random, 1);
    }
    console.log('No hay nombres');
}

const randomName = ruleta(nombres);