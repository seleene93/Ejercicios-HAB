// Creamos una función para validar un DNI
function validateDNI(dni) {
    // Escribe aquí tu código

    // Declaramos las variables que usaremos
    let numero, letra, letraFinal;
    let expresionRegular = /(^([0-9]{8,8}\-[A-Z])|^)$/; // La utilizamos para controlar que el DNI debe de estar formado
                                                        // por 8 caracteres que estén entre el 0 y el 9, seguidos por un guión
                                                        // "-" y acabados con una letra mayúscula.
    const letras = [ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X",
                     "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

    try {
        // Comprobamos que el DNI tenga el formato correcto con la expresión regular
        if (expresionRegular.test(dni) === true) {
            numero = dni.substr(0, dni.length - 2); // Asignamos a la variable número el valor de la parte numérica del DNI
            letra = dni.substr(dni.length - 1, 1); // Asignamos a la variable letra el valor de la letra del DNI
            numero = numero % 23; // Reasignamos a la variable número el resto de dividirlo entre 23
            letraFinal = letras[numero]; // Esta variable la usaremos para comprobar que la letra coincide
            
            // Controlamos que la longitud del DNI sea la correcta
            if (dni.length === 10) {
                // Comprobamos que la letra final sea la correcta
                if (letraFinal === letra.toUpperCase()) {
                    console.log('El DNI es válido');
                } else {
                    throw new Error("La letra no coincide");
                }
            } else {
                throw new Error("La longitud del DNI no es la correcta");
            }
        } else {
            throw new Error("Debe introducir un formato correcto de DNI. " +
                            "El formato debe ser: 01234567-X");
        }
    } catch (e) {
        console.error(e.message);
    }
}

validateDNI('00000000-T');
// Nota: probaremos con varios números de DNI tanto válidos como no válidos
