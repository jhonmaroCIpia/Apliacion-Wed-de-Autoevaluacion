const bcrypt = require('bcrypt');
const saltRounds = 10;

// Contraseña a hashear
const password = 'PASSWORD';

// Generar el hash
bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error al generar el hash:', err);
  } else {
    console.log('Contraseña original:', password);
    console.log('Contraseña hashada:', hash);
  }
});
