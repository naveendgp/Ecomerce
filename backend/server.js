const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors("*"));
app.use('/api/books', bookRoutes);
app.use('/api/orders', orderRoutes);


const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/booksdb';

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => console.log('MongoDB connection error:', error));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
