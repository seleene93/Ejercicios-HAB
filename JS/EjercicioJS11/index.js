// Escribe aquí tu código

let segundos = 0;
let minutos = 0;
let horas = 0;
let dias = 0;

let detenerse = false;

let strSegundos = '';
let strMinutos = '';
let strHoras = '';
let strDias = '';

function detener(tiempo, momento) {
    const intervalo = setInterval(() => {

        segundos += 5; // Incrementamos los segundos en 5 con cada ejecución
    
        // Cuando segundos llegue a 60 reseteo segundos a 0 e incremento minutos en 1
        if (segundos === 60) {
            segundos = 0; 
            minutos++;
        }
        
        // Cuando minutos llegue a 60 reseteo minutos a 0 e incremento horas en 1
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    
        // Cuando horas llegue a 24 reseteo horas a 0 e incremento días en 1
        if (horas === 24) {
            horas = 0;
            dias++;
        }
    
        // Cuando segundos sea 1 lo mostraremos en singular
        if (segundos === 1) {
            strSegundos = 'segundo';
        } else {
            strSegundos = 'segundos';
        }
    
        // Cuando minutos sea 1 lo mostraremos en singular
        if (minutos === 1) {
            strMinutos = 'minuto';
        } else {
            strMinutos = 'minutos';
        }
    
        // Cuando horas sea 1 lo mostraremos en singular
        if (horas === 1) {
            strHoras = 'hora';
        } else {
            strHoras = 'horas';
        }
    
        // Cuando dias sea 1 lo mostraremos en singular
        if (dias === 1) {
            strDias = 'día';
        } else {
            strDias = 'días';
        }
        
        if (tiempo === segundos && momento === 'S') {
            detenerse = true;
            clearInterval(intervalo);
        } else if (tiempo === minutos && momento === 'M') {
            detenerse = true;
            clearInterval(intervalo);
        } else if (tiempo === horas && momento === 'H') {
            detenerse = true;
            clearInterval(intervalo);
        } else if (tiempo === dias && momento === 'D') {
            detenerse = true;
            clearInterval(intervalo);
        }

        if (detenerse === false) {
            console.log(`Han pasado ${dias} ${strDias}, ${horas} ${strHoras}, ${minutos} ${strMinutos} y ${segundos} ${strSegundos} desde la ejecución del programa`);
        } else {
            console.log(`Se ha parado el cronómetro en ${dias} ${strDias}, ${horas} ${strHoras}, ${minutos} ${strMinutos} y ${segundos} ${strSegundos}`);
        }
    }, 5000);
}

detener(1, "M");
