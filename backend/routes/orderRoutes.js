const express = require('express');
const Payment = require('../models/orderModel');

const router = express.Router();

router.post('/payment', async (req, res) => {
    try {
      const { BookTitle, Author, Price, BookImage, paymentStatus, timestamp, address } = req.body;
  
      const newPayment = new Payment({
        BookTitle,
        Author,
        Price,
        BookImage,
        paymentStatus,
        timestamp,
        address,
      });
  
      const savedPayment = await newPayment.save();
      res.status(201).json({ message: 'Payment saved successfully', savedPayment });
    } catch (error) {
      console.error('Error saving payment:', error);
      res.status(500).json({ message: 'Failed to save payment', error });
    }
  });
  

module.exports = router;
