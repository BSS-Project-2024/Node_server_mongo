const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  domain: {
    type: String,
    required: false,
  },
  web_url: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
})
itemSchema.index({ text: 1, web_url: 1 }, { unique: true })

const Item = mongoose.model('Item', itemSchema)

module.exports = Item
