const express = require('express')
const router = express.Router()
const Payment = require('../models/payment')

//setting up routes
//handling POST request to save payment data
router.post('/', async(req,res) => {
    const paymentData = new Payment(req.body)
    try{
        await paymentData.save();
        res.status(200).send('Payment details saved successfully')
    }catch(err){
        console.error('Error saving payment details', err)
        res.status(500).send('Error saving payment details')
    }
})

module.exports = router