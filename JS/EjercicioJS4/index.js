// Escribe aquí tu código
'use strict';

// Declaramos las variables
let horas = ":00"; 
let palabra = "";
let i = 0;

// Creamos un bucle que vaya de 0 a 23
// si la franja horaria está entre las 0:00 y las 7:00 se imprimirá por consola
// la hora. pero si está entre las 8:00 y las 22:00 aparecera "CUCÚ" las veces 
// que corresponda a la hora, menos en la franja horaria de 13 a 22 que los "CUCÚS" se corresponderan
// a la hora en formato 12h.

for (i = 0; i < 24; i++) {

    if (i < 8) {
        console.log(`Son las ${i}${horas}`);
    } else if (i > 7 && i <= 12) {
       palabra = "CUCÚ! ".repeat(i);
       console.log(`Son las ${i}${horas}. ${palabra}`);
    } else if (i > 12 && i <= 22) {
       palabra = "CUCÚ! ".repeat(i-12);
       console.log(`Son las ${i}${horas}. ${palabra}`);
    } else {
        console.log(`Son las ${i}${horas}`);
    }
}
