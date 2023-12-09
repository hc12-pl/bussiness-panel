const con = require('../db_connect').getcon();

function removeUser(id) {
    const sqlRemove = "DELETE FROM `users` WHERE `id` = ?";

    con.query(sqlRemove, [`${id}`], (error, result, fields) => {
        if (error) throw error;

        console.log(result);
    });
}

module.exports = { removeUser }


