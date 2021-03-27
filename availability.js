const db = require('./db')
const utils = require('./utils')
const express = require('express')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from availability`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/', (request, response) => {
    const { roomcategory, beddingcategory, roomcategoryid,beddingcategoryid, bookid} = request.body

    const connection = db.connect()
    const statement = `insert into availability ( roomcategory, beddingcategory, roomcategoryid, beddingcategoryid, bookid) values ('${roomcategory}','${beddingcategory}', ${roomcategoryid}, ${beddingcategoryid}, ${bookid})`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

module.exports=router