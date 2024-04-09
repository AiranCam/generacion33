
const numeroOrdenes = 70
const ordenesPrevistas = 60
const diaDelMes = 8

function gestionarOrdenes(ordenes, ordenesPrevistas, diaMes) {
  let mensaje = '';

  if (diaMes % 2 === 0) {
    mensaje = 'Hoy es un día par. ';
  } else {
    mensaje = 'Hoy es un día impar. ';

    if (ordenes > ordenesPrevistas) {
      mensaje += 'Las órdenes superaron las previstas. ';
      mensaje += 'Es probable que haya una mayor demanda mañana. ';
    }
  }

  const porcentajeCumplidas = (ordenes / ordenesPrevistas) * 100;
  mensaje += `El porcentaje de órdenes cumplidas respecto al número previsto fue de ${porcentajeCumplidas.toFixed(2)}%.`;

  return mensaje;
}

const mensajeResultado = gestionarOrdenes(numeroOrdenes, ordenesPrevistas, diaDelMes);
console.log(mensajeResultado);
