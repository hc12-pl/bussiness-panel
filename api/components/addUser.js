const con = require("../../db_connect").getcon();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken'); // Dodatkowa biblioteka do generowania tokenów JWT

async function generateToken() {
  // Przykładowe ustawienia tokena, możesz dostosować według własnych potrzeb
  const tokenData = {
    expiresIn: '1h', // Token będzie ważny przez 1 godzinę
    issuer: 'YourIssuer', // Nazwa wydawcy tokenu
    // ... dodaj inne dane, które chciałbyś zawrzeć w tokenie
  };

  // Zwróć nowo wygenerowany token
  return jwt.sign(tokenData, 'yourSecretKey'); // Zastąp 'yourSecretKey' swoim prywatnym kluczem
}

async function addUser(username, password, phone, email, name, surname, active) {
  // Sprawdź, czy wymagane pola są dostarczone
  if (!username || !password || !phone || !email || !name || !surname || active === undefined) {
    console.error('Wymagane pola nie zostały dostarczone.');
    con.end();
    return;
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const token = await generateToken(); // Wygeneruj nowy token

  const sqlQuery = 'INSERT INTO `users` (`username`, `password`, `phone`, `email`, `name`, `surname`, `active`, `token`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  
  con.query(sqlQuery, [username, hashedPassword, phone, email, name, surname, active, token], function (err, result, fields) {
    if (err) {
      console.error(err);
    } else {
      console.log('User added successfully!');
    }
    
    con.end();
  });
}

// Przykład użycia:
// const username = 'Root1';
// const password = 'Root1';
// const phone = '123456789';
// const email = 'root1@localhost.com';
// const name = 'Root1';
// const surname = 'Root1';
// const active = 1; // 1 oznacza aktywnego użytkownika, 0 oznacza nieaktywnego

module.exports = { addUser };

