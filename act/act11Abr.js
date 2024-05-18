const people = [
    { name: 'Juan', lastname: 'Perez', age: 30, gender: 'Male', country: 'Mexico' },
    { name: 'Maria', lastname: 'Garcia', age: 25, gender: 'Female', country: 'Spain' },
    { name: 'John', lastname: 'Smith', age: 40, gender: 'Male', country: 'United States' },
    { name: 'Anna', lastname: 'Johnson', age: 35, gender: 'Female', country: 'Canada' },
    { name: 'Carlos', lastname: 'Rodriguez', age: 28, gender: 'Male', country: 'Argentina' },
    { name: 'Sophie', lastname: 'Martin', age: 32, gender: 'Female', country: 'France' },
    { name: 'David', lastname: 'Brown', age: 45, gender: 'Male', country: 'Australia' },
    { name: 'Elena', lastname: 'Gomez', age: 27, gender: 'Female', country: 'Spain' },
    { name: 'Michael', lastname: 'Nguyen', age: 33, gender: 'Male', country: 'Vietnam' },
    { name: 'Sara', lastname: 'Lee', age: 29, gender: 'Female', country: 'South Korea' }
  ];

/* 
 1.- Necesitamos una lista unicamente con los nombres completos de cada usuario
 2.- Necesitamos una lista con los usuarios con genero masculino
 3.- Necesitamos una lista con los usuarios con genero femenino
 4.- Necesitamos saber la edad promedio de los usuarios
 5.- Necsitamos saber la mayor edad
 6.- Necesitamos saber la menor edad
*/

/*  1.- Necesitamos una lista unicamente con los nombres completos de cada usuario por lo que 
debemos selecionar unicamente el name y lastname de cada objeto y agregarlos en un nuevo array */

const names = people.map(person => `${person.name} ${person.lastname}`);
console.log(names);
console.log('---------------------------');

/* 2.- Necesitamos una lista con los usuarios con genero masculino por lo que debemos
filtrar unicamente los usuarios que tengan genero masculino */

const male = people.filter(person => person.gender === 'Male');
console.log(male)
console.log('---------------------------');

/* 3.- Necesitamos una lista con los usuarios con genero femenino por lo que debemos
filtrar unicamente los usuarios que tengan genero femenino */

const female = people.filter(person => person.gender === 'Female');
console.log(female);
console.log('---------------------------');

/* 4.- Necesitamos saber la edad promedio de las personas dentro del arraay por lo que para
eso debemos obtener todas las edades las cuales vamos a sumar y luego dividir por el numero
de personas */

const ages = people.map(person => person.age);
const average = ages.reduce((sum, age) => sum + age, 0) / ages.length;
console.log(average);
console.log('---------------------------');

/* 5.- Necesitamos saber la mayor edad de las personas dentro del array por lo que para
eso debemos obtener todas las edades y obtener la mayor de ellas */

const maxAge = ages.reduce((max, age) => Math.max(max, age), 0);
console.log(maxAge);
console.log('---------------------------');

/* 6.- Necesitamos saber la menor edad de las personas dentro del array por lo que para
eso debemos obtener todas las edades y obtener la menor de ellas */

const minAge = ages.reduce((min, age) => Math.min(min, age), 0);
console.log(minAge);


