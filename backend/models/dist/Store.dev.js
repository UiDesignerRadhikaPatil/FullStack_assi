"use strict";

// backend/models/Store.js
var mongoose = require('mongoose');

var storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    "default": 0
  }
});
module.exports = mongoose.model('Store', storeSchema);
//# sourceMappingURL=Store.dev.js.map
