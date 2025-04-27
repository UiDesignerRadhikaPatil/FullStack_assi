const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// Route for user registration
router.post('/register', registerUser); // Handle registration logic

// Route for user login
router.post('/login', loginUser); // Handle login logic

module.exports = router;
