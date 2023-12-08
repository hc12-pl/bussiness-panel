const jwt = require('jsonwebtoken');
const config = require('./config');

function generateToken(username, email, role) {
  const secretKey = config.getPrivateKey();

  const payload = {
    username,
    email,
    role,
    iat: Math.floor(Date.now() / 1000), // Czas utworzenia tokenu w sekundach
    exp: Math.floor(Date.now() / 1000) + (60 * 60), // Czas wygaśnięcia tokenu po 1 godzinie
  };

  const token = jwt.sign(payload, secretKey);
  return token;
}

// Przykład użycia:
const username = 'root';
const email = 'root@localhost.com';
const role = 'user';

const generatedToken = generateToken(username, email, role);
console.log(`Generated Token: ${generatedToken}`);