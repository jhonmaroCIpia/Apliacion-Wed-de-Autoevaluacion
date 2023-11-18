const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthService {
  constructor(userModel, secretKey) {
    this.userModel = userModel;
    this.secretKey = secretKey;
  }

  async getUserByEmail(email) {
    try {
      const user = await this.userModel.findByEmail(email);

      if (!user) {
        return null; // Usuario no encontrado
      }

      return user;
    } catch (error) {
      console.error('Error al obtener usuario por correo:', error);
      throw error;
    }
  }

  async login(email, password) {
    try {
      const user = await this.userModel.findByEmail(email);

      if (!user) {
        return null; // Usuario no encontrado
      }

      const isValidPassword = await bcrypt.compare(password, user.USU_CONTRASENIA);

      if (!isValidPassword) {
        return null; // Contraseña incorrecta
      }

      // Generar token JWT
      const token = jwt.sign({ userId: user.USR_IDENTIFICACION, email: user.USU_CORREO, rol: user.ROL_DESCRIPCION }, this.secretKey, {
        expiresIn: '30s', // Tiempo expiracion
      });

      console.log('Token generado:', token);

      res.json({ token });

      user.token = token;

      return user;
    } catch (error) {
      console.error('Error en la autenticación:', error);
      throw error;
    }
  }
}

module.exports = AuthService;
