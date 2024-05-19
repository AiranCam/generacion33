const canes = [
    {
      nombre: "Rex",
      tipo: "Perro",
      edad: 4,
      vacunado: true,
      pais: "México",
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
      pais: "México",
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
      pais: "Colombia",
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
      pais: "Ecuador",
      direccion: {
        calle: "Camino Real",
        numero: 34,
        colonia: "Las Palmas",
        codigoPostal: 78600,
      },
    },
  ];
  
  /*
    Ejercicios iterativos
      1.- Necesito conocer la edad promedio de todos los perros
      2.- Necesito obtener una lista de perros basados en el país al que pertenecen
      3.- Necesito una lista de los códigos postales de los perros
      4.- Necesito una lista que contenga la lista de países a los que pertenecen los perros, pero sin repetidos
 */

/* 1.- Necesito conocer la edad promedio de todos los perros por lo que tenemos que tener una variable donde por cada perro
   se sume la edad a la variable y luego esta la dividas por la cantidad de perros
*/

    const edades = (canes) => {
        let promedio = 0;
        canes.forEach((perro) => promedio += perro.edad);
        return promedio / canes.length;
    }

console.log(edades(canes));
console.log("----------------------------------------------------");

/* 2.- Necesito obtener una lista de perros basados en el país al que pertenecen por lo que tenemos que con reduce obtendremos
    una lista de perros por país
    */

    const perrosPorPais = canes.reduce((acumulador, perro) => {
        const pais = perro.pais;
        
        // Verifica si el país ya existe en el acumulador
        if (!acumulador[pais]) {
          acumulador[pais] = []; // Si no existe, crea una nueva entrada
        }
        
        // Agrega el perro al array correspondiente
        acumulador[pais].push(perro);
        
        return acumulador; // Devuelve el acumulador actualizado
      }, {});
      
    console.log(perrosPorPais);
    console.log("----------------------------------------------------");

/* 3.- Necesito una lista de los códigos postales de los perros por lo que con map obtendremos una lista de códigos postales
    */

    const cp = canes.map(perro => perro.direccion.codigoPostal);
    console.log(cp);
    console.log("----------------------------------------------------");

/* 4.- Necesito una lista que contenga la lista de países a los que pertenecen los perros, pero sin repetidos por lo que con
    reduce obtendremos una lista de países sin repetir
    */

    const paises = canes.reduce((acumulador, perro) => {
        if (!acumulador.includes(perro.pais)) {
          acumulador.push(perro.pais);
        }
        return acumulador;
      }, []);
    
    console.log(paises);
    console.log("----------------------------------------------------");


