const express = require("express");
const app = express();
const port = 8080;

// Escribe aquí el código solicitado

app.use((req, res, next) => {
  const { method, url } = req;
  console.log(`${method} ${url}`);
  next();
});

app.get("/error-forzado", (req, res, next) => {
  return next(new Error("Este es un error generado intencionadamente"));
});

app.get("/hour", (req, res, next) => {
  try {
    const hour = new Date().toLocaleTimeString("es-ES");
    console.log(hour);
    res.status(200).send({ message: hour });
  } catch (error) {
    next(error);
  }
});

app.get("/route", (req, res) => {
  try {
    res.status(200).send(__dirname);
  } catch (error) {
    next(error);
  }
});


app.use((req, res) => {
  res.status(404).send({ message: "Not found" });
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send({ message: `Error: ${error.message}` });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
