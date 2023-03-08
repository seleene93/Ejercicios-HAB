const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

// Escribe aquí tu código
'use strict';

// Creamos una función que recibe como argumento un array y nos devuelve un array sin valores duplicados mediante la función filter.
// En la función filter le damos como argumentos el valor y el índice del array que recibe y una función callback 
// que declararemos dentro y la función indexOf dándole como parámetro un valor del array que irá cambiando y nos retornará el índice del primer valor en donde
// se encuentre un elemento dado. Y podemos identificar si está duplicado cuando el índice no es igual al resultado que nos devuelve indexOf.

function deleteDuplicate(array) {
   return array.filter((valor, indice) => {
    return array.indexOf(valor) === indice;
   });
}

// Ahora mostraremos por consola el array names filtrado con nuestra función creada.
console.log(deleteDuplicate(names));