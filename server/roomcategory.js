const db = require('./db')
const utils = require('./utils')
const express = require('express')
const multer = require('multer')
const upload = multer({dest:'images/'})

const router = express.Router()

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from roomcategory`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.get('/count', (request, response) => {
    const connection = db.connect()
    const statement = `select r.categoryid, r.category, count(b.categoryid) as count from roomcategory r inner join bedding b on(b.categoryid=r.categoryid) group by b.categoryid`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/', (request, response) => {
    const {categoryid, category} = request.body

    const connection = db.connect()
    const statement = `insert into roomcategory (categoryid, category) values ('${categoryid}', '${category}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.put('/:categoryid', (request, response) => {
    const {categoryid} = request.params
    const {category} = request.body
    const connection = db.connect()
    const statement = `update roomcategory set category = '${category}' where categoryid = ${categoryid}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:categoryid', (request, response) => {
    const {categoryid} = request.params
    const connection = db.connect()
    const statement = `delete from roomcategory where categoryid = ${categoryid}`
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