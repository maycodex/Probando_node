const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public')); // Sirve los archivos HTML/CSS/JS

// Ruta de prueba (API REST)
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde Tortas Express 🍰' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
