const express = require('express');
const { createPayment } = require('../handlers/paymentHandler.js');

 const router = express();

router.get('/', (req, res)=> res.send("We have apiMercadoPago"));

router.post('/createorder', createPayment);

router.get('/success', (req, res) => res.send("success"));

router.get('/failure', (req, res) => res.send("failure"));

router.get('/pending', (req, res) => res.send("pending"));

// router.post('/webhook', listenWebHook);

module.exports= router