const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    domain: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
