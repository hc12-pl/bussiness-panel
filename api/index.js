const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('./db_connect');
const userHandler = require('./user-info/userHandler');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { token } = req.body;

  if (!token) {
    res.status(401).send({
      error: 'No token provided, access denied!',
    });
  } else {
    try {
      const userData = await userHandler.getUserData(token);
      for (const userInfo of userData) {
        console.log(userInfo);
      }
      res.send({
        message: `Your token: ${token}`,
      });
    } catch (error) {
      res.status(500).send({
        error: 'Internal server error',
      });
    }
  }
});

app.listen(PORT, () => {
  console.log(`API Started on http://localhost:${PORT}`);
});
