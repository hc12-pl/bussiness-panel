const con = require("../db_connect").getcon();

function getUserData(token) {
  return new Promise((resolve, reject) => {
    const sqlQuery = 'SELECT * FROM `users` WHERE `token` = "' + token + '"';
    con.query(sqlQuery, function (err, result, fields) {
      if (err) {
        console.error(err); // Log the database query error for debugging
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = { getUserData };
