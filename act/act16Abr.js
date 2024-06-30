let data = [
    ['Israel', 'Salinas', 34],
    ['Charles', 'Silva', 27],
    ['Naomi', 'Lopez', 27],
    ['David', 'Moranchel', 28]
]
/* 
    1.- Necesitamos una lista con los nombres completos de las personas que se encuentran en la data
    2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista
    3.- Nesitamos reestructurar la dara para que quede de la siguiente manera:
    
    let restructuredData = [
        {
            name:
            lastname:
            age:

        }
    ]
*/

/* 
   1.- Nesitamos crear una funcion donde obtengamos array por array el Nombre y apellido de las personas el cual vamos a 
   iterar con un template string para obtener el nombre completo de la persona cada nombre completo se agregara a otra lista
*/

const getFullName = (dataArray) => {
    let nombres = dataArray.map((person) => {
        let value = `${person[0]} ${person[1]}`;
        return value;
    });
    return nombres;
}

let test = getFullName(data);
console.log(test);
console.log("----------------------------------------------------");

/* 
  2.- Necesitamos crear una funcion con la cual podamos ir array por array obteniendo la edad de cada persona y con 
    ayuda de Math.max y Math.min obtener el array con toda la informacion dentro del array de las personas con la mayor 
    y menor edad
*/

const getMaxMinAge = (dataArray) => {
    let age = dataArray.map((person) => person[2]);
    let max = Math.max(...age);
    let min = Math.min(...age);
    let result = dataArray.filter((person) => person[2] === max || person[2] === min);
    return result;
}
    
let test2 = getMaxMinAge(data);
console.log(test2);
console.log("----------------------------------------------------");

/* 
  3.- Necesitamos crear una funcion con la cual podamos reestructurar la data para que quede de la siguiente manera:
    let restructuredData = [
        {
            name:
            lastname:
            age:

        }
    ]

*/

const restructuredData = (dataArray) => {
    let result = dataArray.map((person) => {
        return {
            name: person[0],
            lastname: person[1],
            age: person[2]
        }
    });
    return result;
}

let test3 = restructuredData(data);
console.log(test3);
