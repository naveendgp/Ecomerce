const express = require('express');
const Order = require('../models/orderModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('productId'); // Populates productId with Book details
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    const { productId, productName, price, address, customerDetails } = req.body;

    if (!productId || !productName || !price || !address || !customerDetails) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newOrder = new Order({
            productId,
            productName,
            price,
            address,
            customerDetails,
        });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
