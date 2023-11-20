const jwt = require('jsonwebtoken');

class AuthMiddleware {
  constructor(secretKey) {
    this.secretKey = secretKey;
    this.verifyToken = this.verifyToken.bind(this);
    this.revokedTokens = new Set();
  }

  verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(401).json({ message: 'Falta token' });
    }

    console.log('Token recibido:', token);

    // Verificar si el token está en la lista de tokens revocados
    if (this.revokedTokens.has(token)) {
      return res.status(403).json({ message: 'Token ha sido revocado' });
    }

    jwt.verify(token, this.secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Token invalido' });
      }

      console.log('Decodificado:', decoded);

      if (!decoded.rol) {
        return res.status(403).json({ message: 'Token invalido: Falta rol' });
      }

      req.user = decoded; // Agrega la información del usuario al objeto de solicitud
      next();
    });
  }

  revokeToken(token) {
    this.revokedTokens.add(token);
  }

  checkRole(allowedRoles) {
    return (req, res, next) => {
      const userRole = req.user ? req.user.rol : null;

      if (!userRole || !allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: 'Unauthorized' });
      }

      next();
    };
  }
}

module.exports = AuthMiddleware;
