const Item = require('../models/Item');

const getItems = async (req, res) => {
    try {
        // Query the database and exclude the '_id' and '__v' fields using 'select' method
        const items = await Item.find().select('-_id -__v');
        
        // Send the query results as a JSON response
        res.json(items);
    } catch (err) {
        // Handle any errors during the retrieval process
        res.status(500).json({ error: 'Failed to retrieve items' });
    }
};

module.exports = getItems;
