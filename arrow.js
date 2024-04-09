//Funcion flecha

let holaFuncion = (nombre) => {
    console.log('hola', nombre);
}

holaFuncion('Juan')

holaFuncion = (nombre, apellido) => {
    console.log('hola', nombre, apellido);
}

holaFuncion('AAdrian', 'Perez')

console.log(() => 'Hola Mundo')
