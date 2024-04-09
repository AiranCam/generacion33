function sumar1y2 () {
    const uno = 1;
    const dos = 2;

    const resultado = uno + dos;

    if (resultado === 3) {
        return 'La suma es 3';
    } else {
        return 'La suma no es 3';
    }
}

const resultadoDeLaSuma = sumar1y2();
console.log(resultadoDeLaSuma);