const express = require('express');
const bodyParser = require('body-parser');
const itemController = require('./itemController');
const authController = require('./authController');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  database: 'db_autoevaluacion',
  user: 'root',
  password: '',
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`RUNNING SERVER IN: ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('HOLA');
});

// Rutas para items
app.use('/items', itemController(pool));

// Ruta para el inicio de sesión
app.use('/auth', authController);
