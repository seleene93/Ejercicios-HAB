const express = require('express');
const cors = require('cors');
const path = require("path");
const fs = require("fs").promises;
const app = express();
const port = 8080;
const events = require("./data.json");
const Joi = require("joi");

app.use(cors());

// Escribe aquí el código solicitado
app.use(express.json());

app.get("/list", (req, res) => {
  res.status(200).send(events);
});

app.post("/new", async (req, res, next) => {
  try {
    // Hacemos destructuring del body de la petición y recogemos el date y el event
    const { date, event } = req.body;

    const schema = Joi.object().keys({  
      date: Joi.date().required(),
      event: Joi.string().required(),
  }); 
  
   const validation = schema.validate(req.body);
  
    if (validation.error) {
      console.error(validation.error.message); 
    }

    // Si todo va bien, creamos el objeto newUser con los datos del evento nuevo a crear
    const newEvent = { date, event };

    // Metemos el evento nuevo el array de events
    events.push(newEvent);

    // También metemos el evento nuevo en el JSON
    const eventsJSONPath = path.join(__dirname, "./data.json");
    await fs.writeFile(eventsJSONPath, JSON.stringify(events));

    // Enviamos una respuesta con status 201 (que todo fue bien y que se ha creado algo) y el nuevo evento creado
    res.status(201).send(newEvent);
  } catch (error) {
    // Si salta algún error, lo mandamos al middleware de errores
    next(error);
  }
});

app.use((error, req, res, next) => {
  console.error(error);

  res.send({
    status: 'Error',
    message: error.message
  });
});

app.use((req, res) => {
  res.status(404).send({
    status: 'Error',
    message: 'Not found',
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})