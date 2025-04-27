"use strict";

var express = require('express');

var _require = require('../controllers/authController'),
    registerUser = _require.registerUser,
    loginUser = _require.loginUser;

var router = express.Router(); // Route for user registration

router.post('/register', registerUser); // Handle registration logic
// Route for user login

router.post('/login', loginUser); // Handle login logic

module.exports = router;
//# sourceMappingURL=authRoutes.dev.js.map
