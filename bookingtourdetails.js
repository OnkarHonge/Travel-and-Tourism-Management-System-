const db = require('./db')
const utils = require('./utils')
const express = require('express')

const router = express.Router()

router.post('/booktour', (request, response) => {
    const {destinationid, packagetype} = request.body

    const connection = db.connect()
    const statement = `insert into bookingtourdetails (destinationid, packagetype) values ('${destinationid}', '${packagetype}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

module.exports=router