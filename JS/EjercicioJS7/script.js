function quiz() {
    // Escribe aquí tu código
    // Declaramos la variable para generar un número aleatorio entre 0 y 100.
    // Declaramos la variable para almacenar el valor de lo que el usuario introduzca en el prompt.

   let numAleatorio = Math.round(Math.random() * 100);
   let respuesta = prompt('Introduzca un número');

   // Creamos un bucle para llevar el conteo de las partidas que se han jugado y permitir solo un max
   // de cinco oportunidades.
   // Dentro del bucle se compara la respuesta del usuario con el número generado y se realiza distintas operaciones
   // para distintos casos.

   for (let i = 1; i <= 5; i++) {
    if (numAleatorio === parseInt(respuesta)) {
        alert('Ha ganado');
        break;
    } else if (numAleatorio > parseInt(respuesta)) {
        alert('El número introducido es menor');
        respuesta = prompt('Introduzca un número');
    } else if (numAleatorio < parseInt(respuesta)) {
        alert('El número introducido es mayor');
        respuesta = prompt('Introduzca un número');
    } else {
        alert('Ha cancelado');
        break;
    } if (i === 5) {
        alert(`Ha perdido el número a adivinar era el ${numAleatorio}`);
    }
   } 
}

quiz();