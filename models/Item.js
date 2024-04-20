const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    domain: {
        type: String,
        required: true,
    },
    web_url:{
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
