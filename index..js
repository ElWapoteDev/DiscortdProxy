const express = require('express');
const app = express();
app.use(express.json());

// Importa el router
const miRuta = require('./routes/dc');

// Usa el router con un path base
app.use('/api', miRuta);

// Exporta tu aplicación Express para Vercel
module.exports = app;
