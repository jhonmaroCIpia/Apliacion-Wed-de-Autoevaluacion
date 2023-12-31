const bcrypt = require('bcrypt');
const saltRounds = 10;

// Contraseņa a hashear
const password = 'PASSWORD';

// Generar el hash
bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error al generar el hash:', err);
  } else {
    console.log('Contraseņa original:', password);
    console.log('Contraseņa hashada:', hash);
  }
});
