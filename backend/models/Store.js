// backend/models/Store.js
const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Store', storeSchema);
