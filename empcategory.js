const db = require('./db')
const utils = require('./utils')
const express = require('express')

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from empcategory`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/', (request, response) => {
    const {categoryid, categories} = request.body

    const connection = db.connect()
    const statement = `insert into empcategory (categoryid, categories) values ('${categoryid}', '${categories}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.put('/:categoryid', (request, response) => {
    const {categoryid} = request.params
    const {categories} = request.body
    const connection = db.connect()
    const statement = `update empcategory set categories = '${categories}' where categoryid = ${categoryid}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:categoryid', (request, response) => {
    const {categoryid} = request.params
    const connection = db.connect()
    const statement = `delete from empcategory where categoryid = ${categoryid}`
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