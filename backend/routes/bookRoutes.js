const express = require('express');
const Book = require('../models/bookModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    const { title, author, price, imageUrl, rating, category } = req.body;

    if (!title || !author || !price || !imageUrl || !rating || !category) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newBook = new Book({ title, author, price, imageUrl, rating, category });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
