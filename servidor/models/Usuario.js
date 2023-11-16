const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_autoevaluacion'
});

class Usuario {
  static findByEmail(email) {
    const query = 'SELECT * FROM usuario WHERE usu_correo = ? LIMIT 1';

    return new Promise((resolve, reject) => {
      conn.query(query, [email], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0] || null);
        }
      });
    });
  }
}

module.exports = Usuario;
