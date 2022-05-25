let numeroUno: number = 57;
let numeroDos: number = 54;
let numeroTres: number = 52;

if (numeroUno === numeroDos && numeroDos === numeroTres) {
  console.log(`los tres Numeros son Iguales`);
} else {
  if (numeroUno > numeroDos) {
    if (numeroUno > numeroTres) {
      console.log(`Numero Uno es Mayor`);
    } else {
      console.log(`Numero Tres es Mayor`);
    }
  } else {
    if (numeroDos > numeroTres) {
      console.log(`Numero Dos es Mayor`);
    } else {
      console.log(`Numero Tres es Mayor`);
    }
  }
}
