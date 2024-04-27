const act = "Que onda amigo, como estas?"

const mayusculas = () => act.toUpperCase();
const minusculas = () => act.toLowerCase();
const caracteres = () => act.length;
const letras = () =>act.match(/[a-zA-Z]/g).length;
const palabras = () => act.split(' ').length;

console.log(mayusculas());
console.log(minusculas());
console.log(caracteres());
console.log(letras());
console.log(palabras());

//metodos string y array mañana