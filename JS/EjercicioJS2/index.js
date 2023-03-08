// Escribe aquí tu código
'use strict';

// Añadimos variables
const nombre = 'Marta';
let edad = 27;

// Creamos los condicionales necesarios para imprimir por consola la frase 
// sea correcta de las siguientes.
// - A Marta le corresponde el descuento infantil (menores de 12 años)
// - A Marta le corresponde el descuento juvenil (menores de 30 años)
// - A Marta le corresponde el descuento de jubilados (mayores de 60 años)
// - A Marta no le corresponde ningún descuento

if (edad <= 12) {
    console.log('A Marta le corresponde el descuento infantil');
} else if (edad <= 30) {
    console.log('A Marta le corresponde el descuento juvenil');
} else if (edad >= 60) {
    console.log('A Marta le corresponde el descuento de jubilados');
} else {
    console.log('A Marta no le corresponde ningún descuento');
}