// puntuaciones primera ronda

const firstRound = [
  { team: "Toros Negros", scores: [1, 3, 4, 2, 10, 8] },
  { team: "Águilas Plateadas", scores: [5, 8, 3, 2, 5, 3] },
  { team: "Leones Carmesí", scores: [5, 4, 3, 1, 2, 3, 4] },
  { team: "Rosas Azules", scores: [2, 1, 3, 1, 4, 3, 4] },
  { team: "Mantis Verdes", scores: [1, 4, 5, 1, 3] },
  { team: "Ciervos Celestes", scores: [3, 5, 1, 1] },
  { team: "Pavos Reales Coral", scores: [2, 3, 2, 1, 4, 3] },
  { team: "Orcas Moradas", scores: [2, 3, 3, 4] },
];

let puntuaciones = []; // Creamos el array en el que luego introduciremos el total de las puntuaciones de cada equipo

// Creamos un bucle para recorrer el array de objetos, aplicamos el método reduce a las puntuaciones de cada objeto 
for (const team of firstRound) {
  const totalScore = team.scores.reduce((acc, score) => {
    return acc + score;
  }, 0)
  puntuaciones.push(parseInt(totalScore)); // Introducimos las puntuaciones de cada equipo en el array
}

let mejorPuntuacion = Math.max(...puntuaciones); // Guardamos la puntuación más alta en una variable
let peorPuntuacion = Math.min(...puntuaciones); // Guardamos la puntuación más baja en una variable

// Creamos otro bucle para volver a recorrer el array de objetos y sacar de nuevo las puntuaciones para compararlas
// con la puntuación más alta y más baja
for (const equipo of firstRound) {
  const puntuacionTotal = equipo.scores.reduce((acc, score) => {
    return acc + score;
  }, 0)

  if (mejorPuntuacion === puntuacionTotal) {
    console.log('El mejor equipo es ' + equipo.team + ' con un total de ' + puntuacionTotal + ' puntos');
  }

  if (peorPuntuacion === puntuacionTotal) {
    console.log('El peor equipo es ' + equipo.team + ' con un total de ' + puntuacionTotal + ' puntos');
  }
}
