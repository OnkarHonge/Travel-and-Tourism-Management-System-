const db = require('./db')
const utils = require('./utils')
const express = require('express')

const router = express.Router()

// router.get('/', (request, response) => {
//     const connection = db.connect()
//     const statement = `select * from user`
//     connection.query(statement, (error, data) => {
//         connection.end()
//         response.send(utils.createResult(error, data))
//     })
// })

router.get('/', (request, response) => {
    const connection = db.connect()
    const statement = `select * from user`
    connection.query(statement, (error, data) => {
        connection.end()
        const admins=[]
        for(let index=0; index<data.length;index++)
        {
            const admin=data[index]
            admins.push({
                firstname:admin['firstname'],
                lastname:admin['lastname'],
                email:admin['email'],
                contact:admin['contact'],
                username:admin['username'],
                password:admin['password']
            })
        }
        response.send(utils.createResult(error, data))
    })
})

router.post('/bookingid', (request, response) => {
    const {email} = request.body

    const connection = db.connect()
    const statement = `select bookid from user where email = '${email}'`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.get('/bookingids/:email', (request, response) => {
    const {email} = request.params

    const connection = db.connect()
    const statement = `select bookid from user where email = '${email}'`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/userbook', (request, response) => {
    const {email,bookid} = request.body

    const connection = db.connect()
    const statement = `insert into user (bookid) values ('${bookid}') where email='${email}'`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/', (request, response) => {
    const {userid,username,firstname,lastname,email,contact,password,bookid} = request.body

    const connection = db.connect()
    const statement = `insert into user (userid,username,firstname,lastname,email,contact,password,bookid) values ('${userid}', '${username}', '${firstname}', '${lastname}', '${email}', '${contact}', '${password}', '${bookid}')`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.post('/login',(request,response)=>{
    const {email,password}=request.body
    console.log(response.body)
    const connection=db.connect()
    const statement=`select * from user where email='${email}' and password='${password}'`
    //console.log(statement)
    connection.query(statement,(error,admins)=>{
        connection.end()

        if(admins.length==0){
            response.send(utils.createResult('user does not exists'))
        }
        else{
            const admin=admins[0]
            const info={
                userid:admin['userid'],
                username:admin['username'],
                email:admin['email']
            }
            response.send(utils.createResult(error,info))
        }
    })
})

router.post('/register', (request, response) => {
    const {firstname, lastname, email, contact, username,password} = request.body

    const connection = db.connect()

    const statement1=`select * from user where email='${email}'`
    connection.query(statement1,(error, admins)=>{
        console.log(admins)
        if(admins.length==0){
            const statement = `insert into user (firstname, lastname, email, contact, username, password) values ('${firstname}', '${lastname}', '${email}', ${contact}, '${username}', '${password}')`
            connection.query(statement, (error, data) => {
            connection.end()
            response.send(utils.createResult(error, data))
        
            })
        }
        else{
            connection.end()
            response.send(utils.createResult('email exists. please use another email'))
        }
    })
})

// router.post('/register', (request, response) => {
//     const {username,firstname,lastname,email,contact,password} = request.body

//     const connection = db.connect()
//     const statement = `insert into user (username,firstname,lastname,email,contact,password) values ( '${username}', '${firstname}', '${lastname}', '${email}', '${contact}', '${password}')`
//     connection.query(statement, (error, data) => {
//         connection.end()
//         response.send(utils.createResult(error, data))
//     })
// })

// router.put('/:userid', (request, response) => {
//     const {userid} = request.params
//     const {username,firstname,lastname,email,contact,password,bookid} = request.body
//     const connection = db.connect()
//     const statement = `update user set username = '${username}', firstname = '${firstname}', lastname = '${lastname}', email = '${email}', contact = '${contact}', password = '${password}', bookid = '${bookid}' where userid = ${userid}`
//     connection.query(statement, (error, data) => {
//         connection.end()
//         response.send(utils.createResult(error, data))
//     })
// })




router.put('/:email', (request, response) => {
    const {email} = request.params
    const {bookid} = request.body
    const connection = db.connect()
    const statement = `update user set bookid = '${bookid}' where email = '${email}'`
    connection.query(statement, (error, data) => {
        connection.end()
        response.send(utils.createResult(error, data))
    })
})

router.delete('/:userid', (request, response) => {
    const {userid} = request.params
    const connection = db.connect()
    const statement = `delete from user where userid = ${userid}`
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