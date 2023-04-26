import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Define la ruta para servir archivos estáticos generados por Vite.js
app.use(express.static(__dirname + '/dist'));

// Ruta para servir tu aplicación en modo de producción
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

// Puerto en el que escuchará tu servidor Express
const PORT = 8080;

// Inicia el servidor Express
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});