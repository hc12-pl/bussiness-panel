const con = require("../../db_connect").getcon();
const bcrypt = require('bcrypt');

async function addUser(username, password, phone, email, name, surname, active, token) {
  // Sprawdź, czy wymagane pola są dostarczone
  if (!username || !password || !phone || !email || !name || !surname || active === undefined || !token) {
    console.error('Wymagane pola nie zostały dostarczone.');
    con.end();
    return;
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

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
const username = 'user';
const password = 'user';
const phone = '123456789';
const email = 'user@localhost.com';
const name = 'User';
const surname = 'User';
const active = 1; // 1 oznacza aktywnego użytkownika, 0 oznacza nieaktywnego
const token = 'exampleToken123';

// Dodaj użytkownika do bazy danych
addUser(username, password, phone, email, name, surname, active, token);