const con = require('../db_connect').getcon();

function deactivateUser(id) {
    const sqlDeactivate = "UPDATE `users` SET `active` = 0 WHERE `id` = ?";

    con.query(sqlDeactivate, [`${id}`], (error, result, fields) => {
        if (error) throw error;

        console.log(result);
    });
}

module.exports = { deactivateUser }

deactivateUser(1)




