// Escribe tu código a continuación
const argv = require("minimist")(process.argv.slice(2));
const path = require("path");
const fs = require("fs/promises");
const sharp = require("sharp");

// Destructuramos imgFile de argv
const { imgFile } = argv;
const samplesDir = path.join(__dirname, "samples");

// comprueba que la ruta existe
async function pathExists(samplesDir) {

  try {
    await fs.access(samplesDir);
  } catch {
    throw new Error(`La ruta ${samplesDir} no existe`);
  }
}
 // si no existe crea una carpeta
async function createPathIfNotExists(samplesDir) {

  try {
    await fs.access(samplesDir);
  } catch {
    await fs.mkdir(samplesDir);
  }
}

// Funcion que procesa la imagen
async function processImage({ imgFile, samplesDir }) {

  try {
    // ruta de la imagen en nuestro ordenador
    const imgRoute = path.resolve(__dirname, imgFile);

    // llamamos a la funcion pathExist y le pasamos dirname(ubicacion donde estamos respecto a posicion en el ordenador)
    pathExists(__dirname);
    // si samplesDir no existe creara la ruta 
    createPathIfNotExists(samplesDir);
     
    // sharp procesara la imagen y le pasaremos la ruta de la imagen
    const processedImg = sharp(imgRoute);

    // Creamos bucle normal para que con cada vuelta del mismo procese la imagen con una modificación distinta
    for (let i = 0; i <= 2; i++) {

      switch (i) {
        case 0:
          // procesará la imagen en 200px de width
          processedImg.resize(200);
          await processedImg.toFile(
            path.resolve(samplesDir, `processed_${i + '_' + imgFile}`)
          );
          continue;

        case 1:
          // procesará la imagen en 500px de width
          processedImg.resize(500);
          // guardará la imagen en la carpeta samplesDir con otro nombre
          await processedImg.toFile(
            path.resolve(samplesDir, `processed_${i + '_' + imgFile}`)
          );
          continue;
            // procesa la imagen en 500px de width y convierte la foto a blanco y negro
        default:
          processedImg.resize(500);
          processedImg.grayscale(true);

          await processedImg.toFile(
            path.resolve(samplesDir, `processed_${i + '_' + imgFile}`)
          );
          break;
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}

processImage({ imgFile, samplesDir });
