const con = require("../db_connect").getcon();
const bcrypt = require('bcrypt'); // Dodatkowa biblioteka do hashowania hasła

async function getUserData(username, email, password) {
  return new Promise((resolve, reject) => {
    const sqlQuery = 'SELECT * FROM `users` WHERE `username` = ? OR `email` = ?';
    con.query(sqlQuery, [username, email], async function (err, result, fields) {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        if (result.length > 0) {
          // Jeśli znaleziono użytkownika o podanym loginie lub emailu

          // Porównaj hasło za pomocą funkcji bcrypt.compare
          const passwordMatch = await bcrypt.compare(password, result[0].password);

          if (passwordMatch) {
            // Jeśli hasło pasuje, zwróć dane użytkownika
            resolve(result[0]);
          } else {
            // Jeśli hasło nie pasuje, odrzuć zapytanie
            resolve(null);
          }
        } else {
          // Jeśli nie znaleziono użytkownika, odrzuć zapytanie
          resolve(null);
        }
      }
    });
  });
}


function getUserFull(id) {
  sqlQueryFull = 'SELECT `id`, `username`, `phone`, `email`, `name`, `surname`, `active`, `permLevel` FROM `users` WHERE `id` = ? ';

  con.query(sqlQueryFull, [id], (err, result, fields) => {
    if (err) throw err;

    const res = JSON.parse(JSON.stringify(result[0]))
    console.log(res)
    
    
    
  })
}

module.exports = { getUserData, getUserFull };

getUserFull(1)