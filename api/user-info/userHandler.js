const con = require("../db_connect").getcon();

function getUserData(username, email, password) {
  return new Promise((resolve, reject) => {
    const sqlQuery = 'SELECT * FROM `users` WHERE `username` = ? AND `email` = ? AND `password` = ?';
    con.query(sqlQuery, [username, email, password], function (err, result, fields) {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(result[0]);
      }
    });
  });
}

module.exports = { getUserData };