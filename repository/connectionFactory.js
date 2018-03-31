var mysql = require('mysql');

function createDBConnection(){
    return mysql.createDBConnection({
        host:'localhost',
        user: 'root',
        password: 'root',
        database: 'docscanDB'
    })
}

module.exports = function(){
    return createDBConnection;
}