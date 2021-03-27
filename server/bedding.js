const db = require('./db')
const utils = require('./utils')
const express = require('express')

const router = express.Router()

router.get('/type', (request, response) => {
    const connection = db.connect()
    const statement = `select distinct beddingtype from bedding`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from bedding`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.get('/beddingtype/:categoryid', (request, response) => {
    const connection = db.connect()
    const {categoryid} = request.params
    const statement = `select beddingtype from bedding where categoryid= ${categoryid}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.get('/join', (request, response) => {
    const connection = db.connect()
    const statement = `select b.bedid 'bedid', r.category 'category', b.beddingtype 'beddingtype' from roomcategory r inner join bedding b on r.categoryid=b.categoryid`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})


router.post('/', (request, response) => {
    const {beddingtype, categoryid} = request.body

    const connection = db.connect()
    const statement = `insert into bedding (beddingtype, categoryid) values ('${beddingtype}', ${categoryid})`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.put('/:bedid', (request, response) => {
    const {bedid} = request.params
    const {beddingtype,categoryid} = request.body
    const connection = db.connect()
    const statement = `update bedding set beddingtype = '${beddingtype}' and categoryid = ${categoryid} where bedid=${bedid}`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:bedid', (request, response) => {
    const {bedid} = request.params
    const connection = db.connect()
    const statement = `delete from bedding where bedid = ${bedid}`
    connection.query(statement, (error, data) => {

        connection.end()
        response.send(utils.createResult(error, data))
        // delete the products from this category
        // const statement2 = `delete from Product where categoryId = ${id}`
        // connection.query(statement2, (error, data) => {
        //     connection.end()
        //     response.send(utils.createResult(error, data))
        // })
    })
})
module.exports=router