require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const getItems = require('./routes/getItems');
const postItems = require('./routes/postItems');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Middleware to parse JSON request bodies
app.use(express.json());

// API to get all items from the database
app.get('/items', getItems);

// API to insert a new item into the database
app.post('/items', postItems);



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
