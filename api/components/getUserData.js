const connection = require('../db_connect').getcon();



// Funkcja do wyszukiwania użytkowników w bazie danych
function searchUsers(searchTerm) {
  // Nawiązanie połączenia


  const sqlQuery = 'SELECT * FROM users WHERE username LIKE ?';

  connection.query(sqlQuery, [`%${searchTerm}%`], (error, results, fields) => {
    if (error) throw error;

    console.log('Znalezione użytkownicy:');
    console.log(results);

    // Zakończenie połączenia po wykonaniu zapytania

  });
}

// Przykład użycia
// const searchTerm = 'r';
// searchUsers(searchTerm);

module.exports = { searchUsers };