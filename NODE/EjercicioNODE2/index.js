// Escribe tu código a continuación

const argv = require("minimist")(process.argv.slice(2));
const fs = require("fs").promises;
const path = require("path");

// Destructuramos date, event y list de argv (el array de procesos)
const { date, event, list } = argv;

// Creamos la ruta que se refiere al archivo events.json
const pathEventsJSON = path.join(__dirname, "events.json");

// Llamamos a la funcion para añadir eventos y le pasamos date y event como argumentos
addEvent(date, event);

// Creamos la función que añadirá los eventos al archivo events.json
async function addEvent(date, event) {
  try {

    // Leemos el fichero events.json y le damos formato utf-8
    const eventsJSON = await fs.readFile(pathEventsJSON, "utf-8");
    // Parseamos el JSON para obtener el array de eventos
    const events = JSON.parse(eventsJSON);

    // Si date y event no son nulos pushearemos en el array events: date y event (que son pasados por la consola gracias a minimist)
    if (date && event) {
      events.push({ date, event });

      // Creamos el fichero con el array completo de eventos (incluído el nuevo)
      await fs.writeFile(pathEventsJSON, JSON.stringify(events));

      // Si list no es nulo llamaremos a la función para listar
    } else if (list) {
      await lista(list, events);
    }
  } catch (error) {
    if (error.code === "ENOENT") {
        // Si da un error porque el fichero events.json no existe, lo creamos con un array vacío
      await fs.writeFile(pathEventsJSON, JSON.stringify([]));

        // Una vez creado el fichero, volvemos a intentar añadir el evento nuevo
      addEvent(date, event);
    } else {

        // Si es cualquier otro error, lo sacamos por consola
      console.error(error);
    }
  }
}


// Creamos funcion de listar y le pasamos list y events (que serán obtenidos por la funcion addEvent)
async function lista(list, events) {

    // Ordenamos el objeto event.date por orden descendente
  events.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // Si a list le damos valor de "events" recorrera el objeto y sacara la fecha y el evento 
  if (list === "events") {
    for (const event of events) {
      console.log(`📆 ${event.date}: ${event.event}`);
    }
  }
}

// el comando para listar es node index.js --list="events"
