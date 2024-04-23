const Item = require('../models/Item');
const { URL } = require('url');
const postItems = async (req, res) => {
    try {
        // Create a new item using the data from the request body
        const newItem = new Item(req.body);
        const urlObject = new URL(newItem.web_url);

// Extract the domain name (hostname)
const domainName = urlObject.hostname;
        // Save the new item to the database
        newItem.domain=domainName;
        await newItem.save();
        
        // Send a response with the saved item
        res.status(201).json(newItem);
    } catch (err) {
        // Handle any errors during the saving process
        res.status(400).json({ error: 'Failed to insert item', details: err.message });
    }
};

module.exports = postItems;
