const db = require('./db')
const utils = require('./utils')
const express = require('express')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from rooms`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/', (request, response) => {
    const {roomno, categoryid, bookid} = request.body

    const connection = db.connect()
    const statement = `insert into rooms (roomno, categoryid, bookid) values ('${roomno}', '${categoryid}','${bookid}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.put('/:roomno', (request, response) => {
    const {roomno} = request.params
    const {categoryid,bookid} = request.body
    const connection = db.connect()
    const statement = `update rooms set categoryid = '${categoryid}', bookid='${bookid}' where roomno = ${roomno}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:roomno', (request, response) => {
    const {roomno} = request.params
    const connection = db.connect()
    const statement = `delete from rooms where roomno = ${roomno}`
    connection.query(statement, (error, data) => {

        connection.end()
        response.send(utils.createResult(error, data))
        // // delete the products from this category
        // const statement2 = `delete from Product where categoryId = ${id}`
        // connection.query(statement2, (error, data) => {
        //     connection.end()
        //     response.send(utils.createResult(error, data))
        // })
    })
})

module.exports=router