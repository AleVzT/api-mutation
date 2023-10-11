const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cluster = require('cluster');
const { dbConnection } = require('./database/config');
require('dotenv').config();

const app = express();

// Base de datos
dbConnection();

// Lectura y parseo del body
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use(require('./routes/mutation'));
app.use(require('./routes/stats'));


// Configuracion de la aplicacion para manejar fluctuaciones agresivas de trafico
// Implementacion de un balanceador de carga utilizando el modulo cluster
const numCPUs = require('os').cpus().length;

if(cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  const server = app.listen( process.env.PORT, () => {
    console.log(`Server corriendo en puerto ${ process.env.PORT }`);
  });
}

// Escuchando peticiones
const server = app.listen( process.env.PORT, () => {
  console.log(`API listening on port ${ process.env.PORT }`);
});

module.exports = { app, server };
