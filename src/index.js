const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const categoriaRoutes = require('./routes/categoria');

const app = express();

// Habilitar CORS para permitir solicitudes desde cualquier origen
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*'); // Permitir cualquier método
  res.header('Access-Control-Allow-Headers', '*'); // Permitir cualquier encabezado
  next();
});

// Puerto
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/api', categoriaRoutes);

// Rutas
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API');
});

// Conexión mongodb
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Conexión a MongoDB'))
  .catch((error) => console.error(error));

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
