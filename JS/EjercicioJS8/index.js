const pizzas = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];


function combine(pizzas) {
  const combinations = [];

  // Escribe aquí tu código
  // se crea una variable que sirve para manejar la posición del array combinations
  let posicion = 0;

  // Se crea un bucle(i) que recorre el array pizzas y dentro de éste se crea otro bucle(j) cuyo inicio es el indice del bucle anterior más uno.
  // con cada vuelta del bucle j se almacena en un índice distinto de combinations la combinación del índice(i) y el índice(j) de pizzas.
  // Cuando finaliza el bucle j por primera vez empieza la segunda vuelta del bucle i por lo que no se repiten valores.
  for (let i = 0; i < pizzas.length; i++) {
    for (let j = i + 1; j < pizzas.length; j++) {
      combinations[posicion++] = pizzas[i] + " y " + pizzas[j];
    }
  }
  return combinations;
}

console.log(combine(pizzas));