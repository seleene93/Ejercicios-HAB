// Escribe aquí tu código
'use strict';

// Si la hora es anterior a las 8 de la mañana o posterior a las 22 debe imprimir solo la información de la hora, por ejemplo: "Son las 3:00"
// Si la hora está entre las 8 y las 22 debe imprimir la información de la hora seguída de "CUCÚ!", por ejemplo "Son las 17:00, CUCÚ!"
let horas = ":00"; 
let palabra = "CUCÚ!"

for (let i = 0; i < 24; i++) {

    if (i < 8) {
        console.log(`Son las ${i}${horas}`);
    } else if (i > 7 && i <= 22) {
       console.log(`Son las ${i}${horas}, ${palabra}`);
    } else {
        console.log(`Son las ${i}${horas}`);
    }
}