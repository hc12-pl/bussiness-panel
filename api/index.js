const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('./config');
const userHandler = require('./user-info/userHandler');

const app = express();
const PORT = 4000;

const secretKey = config.getPrivateKey();

app.use(bodyParser.json());

function generateToken(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
}

function authenticateToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token missing' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
}

app.post('/login', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Sprawdź, czy użytkownik o podanych danych jest dostępny w bazie danych
    const userData = await userHandler.getUserData(username, email, password);

    if (userData) {
      // Generuj token na podstawie danych użytkownika
      const userPayload = {
        id: userData.id,
        username: userData.username,
        email: userData.email,
        // Dodaj inne pola, jeśli są potrzebne
      };

      const generatedToken = generateToken(userPayload);

      res.send({
        message: 'Login successful',
        token: generatedToken,
      });
    } else {
      res.status(401).send({
        error: 'Invalid credentials, access denied!',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      error: 'Internal Server Error',
    });
  }
});

app.get('/protected-resource', authenticateToken, (req, res) => {
  res.json({ message: 'Protected resource accessed', user: req.user });
});

app.listen(PORT, () => {
  console.log(`API Started on http://localhost:${PORT}`);
});