// authController.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthService = require('./authService');
const Usuario = require('./models/Usuario');

const router = express.Router();
const secretKey = 'PASSWORD'; //Remplazar
const authService = new AuthService(Usuario, secretKey);

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authService.getUserByEmail(email);

    if (user && bcrypt.compareSync(password, user.USU_CONTRASENIA)) {
      const token = jwt.sign({ userId: user.USR_IDENTIFICACION, email: user.USU_CORREO }, secretKey, {
        expiresIn: '1h',
      });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error en la autenticación' });
  }
});

module.exports = router;
