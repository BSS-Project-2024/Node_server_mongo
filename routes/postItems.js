const Item = require('../models/Item');

const postItems = async (req, res) => {
    try {
        // Create a new item using the data from the request body
        const newItem = new Item(req.body);
        
        // Save the new item to the database
        await newItem.save();
        
        // Send a response with the saved item
        res.status(201).json(newItem);
    } catch (err) {
        // Handle any errors during the saving process
        res.status(400).json({ error: 'Failed to insert item', details: err.message });
    }
};

module.exports = postItems;
