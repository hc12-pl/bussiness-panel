const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('./db_connect');


const app = express();
const PORT = 4000;
const con = mysql.getcon()

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { token } = req.body;

  if (!token) {
    res.status(401).send({
      error: 'No token provided, access denied!',
    });
  } else {
    res.send({
      message: `Your token: ${token}`,
    });
  }
});

app.listen(PORT, () => {
  console.log(`API Started on http://localhost:${PORT}`);
});