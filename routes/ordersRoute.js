const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51M96V0FtxyuiedyvQmspDbERVbdmdGFHs0zfMEf9IvKLxbXrkj2czndcDfWAnWFYu8qVMtpUwPAwsezl9EaSXJdU009uaEmtFn");

router.post("/placeorder", async (req, res) => {
    const {token, subtotal, currentUser, cartItems} = req.body

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const payment = await stripe.charges.create({
            amount: subtotal * 100,
            currency: 'EUR',
            customer: customer.id,
            receipt_email: token.email
        }, {
            idempotencyKey : uuidv4()
        })

        if (payment){
            res.send('Paiement Accepté')
        } else{
            res.send('Paiement Refusé')
        }
    } catch (error) {
        return res.status(400).json({message: 'erreur' + error})
    }
});

module.exports = router