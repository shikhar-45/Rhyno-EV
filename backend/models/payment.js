const mongoose = require('mongoose')

//schema for payment data
const paymentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    model: String,
    cardNumber: String,
    expiryDate: String,
    cvv: String
});

//creating model from schema
const Payment = mongoose.model('Payment', paymentSchema)
module.exports = Payment