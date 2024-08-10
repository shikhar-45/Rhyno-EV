//setting up server, connecting to mongoDB and using routes defined in paymentRoutes.js

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const paymentRoutes = require('./routes/paymentRoutes')

const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(cors())
app.use(bodyParser.json())

//MongoDB connection
mongoose.connect('#',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB')
}).catch(err => {
    console.error('MongoDB connection error', err)
})

//API routes
app.use('/api/payment', paymentRoutes)

//starting the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})