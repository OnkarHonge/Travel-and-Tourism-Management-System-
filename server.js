const express = require ('express')
const bodyParser =require('body-parser')

const routerBedding = require('./bedding')
const routerBilling = require('./billing')
const routerBookingdetails = require('./bookingdetails')
const routerBookingTourdetails = require('./bookingtourdetails')
const routerEmpcategory = require('./empcategory')
const routerEmployee = require('./employee')
const routerRoomcategory = require('./roomcategory')
const routerDestinations = require('./destinations')
const routerRooms = require('./rooms')
const routerUser = require('./user')
const routerAvailability = require('./availability')
const routerServices = require('./services')

const app = express()

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(bodyParser.json())
app.use(express.static('images'))
app.use('/bedding',routerBedding)
app.use('/billing',routerBilling)
app.use('/bookingdetails',routerBookingdetails)
app.use('/bookingtourdetails',routerBookingTourdetails)
app.use('/empcategory',routerEmpcategory)
app.use('/employee',routerEmployee)
app.use('/roomcategory',routerRoomcategory)
app.use('/destinations',routerDestinations)
app.use('/rooms',routerRooms)
app.use('/user',routerUser)
app.use('/availability',routerAvailability)
app.use('/services',routerServices)

app.listen(4000, '0.0.0.0', () => {
    console.log('server started  on port 4000')
})

module.exports= app;