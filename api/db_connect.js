const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'api',
    password: '+7)h&4tT=U^!dpW'
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
    
})

function getcon() {
    return con;
}

module.exports = { getcon };