const mysql = require('mysql')

function connect()
{
    const connection = mysql.createConnection
    ({
        host: 'localhost',
        user: 'project',
        password: 'project',
        database: 'hotel_management',
        port: 3306
    })

    connection.connect()
    return connection
}

module.exports = { connect: connect }