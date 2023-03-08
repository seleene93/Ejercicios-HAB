const prompt = require('prompt-sync')();
const parseArgs = require('minimist')(process.argv.slice(2));
let status = '';

    if (!parseArgs.name) {
        console.log('Hola');
    } else {
        console.log(`Hola ${parseArgs.name}`);
    }

    
     while (status !== 'bien' && status !== 'muy bien' && status !== 'mal') {
        status = prompt('¿Cómo estás? ').toLowerCase();

        if (status === 'bien') {
            console.log('Me alegro!');
        } else if (status === 'muy bien') {
            console.log('Me alegro mucho!');
        } else if (status === 'mal') {
            console.log('Bueno, mañana será otro día');
        } else {
            console.log('Lo siento, no te he entendido');
        }
    }

