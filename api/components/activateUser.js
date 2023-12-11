const con = require('../db_connect').getcon();

function activateUser(id) {
    const sqlActivate = "UPDATE `users` SET `active` = 1 WHERE `id` = ?";

    con.query(sqlActivate, [`${id}`], (error, result, fields) => {
        if (error) throw error;

        console.log(result);
    });
}

module.exports = { activateUser }




