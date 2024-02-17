// src/app.js
const express = require('express');
const app = express();
app.use(express.json());

// Importa el router
const miRuta = require('./routes/dc');

// Usa el router con un path base
app.use('/api', miRuta);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
