"use strict";

var mongoose = require('mongoose'); // Define the user schema


var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  role: {
    type: String,
    "default": 'user'
  } // Default role is 'user'

}); // Create a User model

var User = mongoose.model('User', userSchema);
module.exports = User;
//# sourceMappingURL=User.dev.js.map
