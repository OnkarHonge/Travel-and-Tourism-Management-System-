const db = require('./db')
const utils = require('./utils')
const express = require('express')

const router = express.Router()

router.post('/', (request, response) => {
    const {message, role} = request.body

    const connection = db.connect()
    const statement = `insert into services (message, role) values ('${message}', '${role}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select message, role from services`
    connection.query(statement, (error, data) => {
        connection.end()
        
        response.send(utils.createResult(error, data))
    })

})

router.get('/:role', (request, response) => {
    const {role} = request.params
    const connection = db.connect()
    const statement = `select message, role from services where role = '${role}'`
    connection.query(statement, (error, data) => {
        connection.end()
        
        response.send(utils.createResult(error, data))
    })

})

router.delete('/:id', (request, response) => {
    const {id} = request.params
    const connection = db.connect()
    const statement = `delete from services where id = ${id}`
    connection.query(statement, (error, data) => {

        connection.end()
        response.send(utils.createResult(error, data))
    })
})




module.exports=router
