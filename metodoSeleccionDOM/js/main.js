console.log('Hello from main.js');

// Metodos de selección de DOM

// getElementById
/* El metodo getElementByID recibe como argumento el id del elemento que queremos selecccionar, y devuelve un elemento 
de DOM, que representa al elemento seleccionado */
let kodersList = document.getElementById('koders-list');

console.log(kodersList);

// getElementsByClassName
/*El metodo getElementsByClassName recibe como argumento el nombre de una clase y devuelve todos los elemtnos del DOM
que tengan en esa clasae dentro de su classlist. EL valor de retorno es un HTMLCollection */

let listGroupItems = document.getElementsByClassName('list-group-item');
console.log(listGroupItems);

// getElementsByTagName

let listItems = document.getElementsByTagName('li');
console.log(listItems);

// querySelector

let FirstkodersItems = document.querySelector('#koders-list .list-group-item');
console.log(FirstkodersItems);

// querySelectorAll

let kodersListItems = document.querySelectorAll('#koders-list .list-group-item');
console.log(kodersListItems);