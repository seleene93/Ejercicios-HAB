const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10
};

// Escribe aquí tu código

// Creamos una función que reciba dos parámetros: name y age y mediante la edad diga si es mayor de edad o no el parámetro nombre que se lo daremos a continuación en el bucle.
function menorMayor(name, age) {
  if (age >= 18) {
    console.log(name + ' es mayor de edad');
  } else {
    console.log(name + ' es menor de edad');
  }
}

// Creamos un bucle para que cuando llamemos a la función se muestre por consola las propiedades del objeto people y nos muestre si es mayor o menor de edad
for (const key in people) {
  menorMayor(key, people[key]);
}
