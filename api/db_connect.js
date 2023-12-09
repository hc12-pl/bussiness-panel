const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'api',
    password: '+7)h&4tT=U^!dpW',
    database: 'api'
})

con.connect(function(err) {
    if (err) throw err;
    
    
})

function getcon() {
    return con;
}

module.exports = { getcon };