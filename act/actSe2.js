

function IndiceMC (peso, altura) {
    const imc = peso / (altura * altura);
    console.log('Tu imc es: ', imc);

    return imc;
}



const imcInfo = (imc) => {
    if (isNaN(imc)) {
        console.log('Ingresa un valor valido');
    }else if (imc < 18.5) {
        console.log('Estas muy flaco');
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log('Al tiro pa');
    } else if (imc >= 25 && imc <= 29.9) {
        console.log('Ya bajale a los tacos');
    }else if(imc >= 30){
        console.log('Ponte a dieta');
    }else{
        console.log('No se encontro el valor');
    }    
}
const imc = IndiceMC(80, 1.70);

imcInfo(imc);

