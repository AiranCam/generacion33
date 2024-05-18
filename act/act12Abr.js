const perritos = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      direccion: {
        calle: "Calle del Parque",
        numero: 23,
        colonia: "San José",
        codigoPostal: 78900,
      },
    },
    {
      nombre: "Bella",
      tipo: "Perro",
      edad: 6,
      vacunado: true,
      direccion: {
        calle: "Avenida Libertad",
        numero: 56,
        colonia: "El Bosque",
        codigoPostal: 78500,
      },
    },
    {
      nombre: "Max",
      tipo: "Perro",
      edad: 3,
      vacunado: false,
      direccion: {
        calle: "Callejón del Puente",
        numero: 12,
        colonia: "Villa Hermosa",
        codigoPostal: 78850,
      },
    },
    {
      nombre: "Rocky",
      tipo: "Perro",
      edad: 2,
      vacunado: false,
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];
  /*
    Ejercicios
    1.- Necesitamos obtener una lista con los objetos de todos los perritos, pero su edad 
    debe mostrarse en años perrunos ( 1 año humano = 7 años perrunos )
    2.- Necesitamos conocer la cantidad de perritos que ya estan vacunados
    3.- Necesitamos una lista que contenga el nombre y la dirección completa de cada perro,
     en el siguiente formato:
        "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "
    4.- Necesitamos saber la edad promedio en años humanos de los perritos de la lista
    5.- Necesitamos una nueva lista con todos los objetos de los perritos, pero cambiando el 
    valor de la propiedad "vacunado" a "si || no" ( si el valor viene en true, cambiarlo a 
    "Si", si el valor viene en false, cambiarlo a "No")
    6.- Necesitamos una nueva lista con únicamente el nombre de cada perritos
*/

/*
 Ejercicio 1
 1.- Primero debemos obtenera todos los objetos de cada perrito y por cada uno de ellos
  vamos a obtener la edad en años perrunos multiplicando la edad en años humanos por 7
 */

const edadPerruna = perritos.map(perrito => ({...perrito, edad: perrito.edad * 7}));
console.log(edadPerruna);
console.log('---------------------------');

/*
    Ejercicio 2
    2.- Necesitamos conocer la cantidad de perritos que ya estan vacunados por lo que por 
    cada perrito vamos a contar cuantos de ellos tienen la propiedad vacunado en true
*/

let vacunadosCount = 0

const vacunados = perritos.forEach(perrito => {
    if(perrito.vacunado === true) {
        vacunadosCount++;
    }
});
console.log(vacunadosCount);
console.log('---------------------------');

/*
    Ejercicio 3
    3.- Necesitamos crear una nueva lista con map que contenga el nombre y la dirección 
    completa de cada perro, siguien el siguiente formato:
        "{nombre}: {calle} #{numero}, {colonia}, {codigoPostal} "
    por lo que vamos a obtener el nombre de cada perrito y luego vamos a iterar los datos
    de la dirección de este modo `${perrito.nombre}: ${perrito.direccion.calle} 
    #${perrito.direccion.numero}, ${perrito.direccion.colonia}, 
    ${perrito.direccion.codigoPostal}`
*/

const direcciones = perritos.map(perrito => `${perrito.nombre}: ${perrito.direccion.calle} #${perrito.direccion.numero}, ${perrito.direccion.colonia}, ${perrito.direccion.codigoPostal}`);
console.log(direcciones);
console.log('---------------------------');

/*
    Ejercicio 4
    4.- Necesitamos saber la edad promedio en años humanos de los perritos de la lista por lo 
    que vamos a obtener todas las edades y las vamos a sumar para luego dividir por el numero
    de perritos
*/

let sumaEdades = 0;
let perros = 0;

const edades = perritos.forEach(perrito => {
    sumaEdades += perrito.edad;
    perros++;
})

const promedio = sumaEdades / perros;
console.log(promedio);
console.log('---------------------------');

/*
    Ejercicio 5
    5.- Necesitamos una nueva lista con todos los objetos de los perritos por lo que usaremos
    map para crearla, pero cambiando el valor de la propiedad "vacunado" a "si || no" 
    ( si el valor viene en true, cambiarlo a 
    "Si", si el valor viene en false, cambiarlo a "No")
*/

const vacuandosSiNo = perritos.map(perrito => {
    if(perrito.vacunado === true) {
        return {...perrito, vacunado: 'Si'};
    }
        return {...perrito, vacunado: 'No'};
})
console.log(vacuandosSiNo);
console.log('---------------------------');

/*
    Ejercicio 6
    6.- Necesitamos una nueva lista con únicamente el nombre de cada perritos por lo que 
    vamos a obtener unicamente el nombre de cada perrito
*/

const nombres = perritos.map(perrito => perrito.nombre);
console.log(nombres);