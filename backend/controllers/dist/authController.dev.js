"use strict";

var User = require('../models/User'); // Assuming you have a User model
// Register a new user


var registerUser = function registerUser(req, res) {
  var _req$body, name, email, password, address, role, existingUser, newUser;

  return regeneratorRuntime.async(function registerUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password, address = _req$body.address, role = _req$body.role;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 4:
          existingUser = _context.sent;

          if (!existingUser) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: 'User already exists'
          }));

        case 7:
          // Create a new user
          newUser = new User({
            name: name,
            email: email,
            password: password,
            // You may want to hash the password before saving
            address: address,
            role: role
          }); // Save the user to the database

          _context.next = 10;
          return regeneratorRuntime.awrap(newUser.save());

        case 10:
          // Respond with success message and user data
          res.status(201).json({
            message: 'User registered successfully',
            user: newUser
          });
          _context.next = 17;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);
          console.error('Error registering user:', _context.t0);
          res.status(500).json({
            message: 'Error registering user. Please try again.'
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 13]]);
}; // Login user (basic example, consider adding password hashing and JWT)


var loginUser = function loginUser(req, res) {
  var _req$body2, email, password, user;

  return regeneratorRuntime.async(function loginUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 4:
          user = _context2.sent;

          if (user) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: 'User not found'
          }));

        case 7:
          if (!(user.password !== password)) {
            _context2.next = 9;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: 'Incorrect password'
          }));

        case 9:
          // Respond with the user (consider JWT for better security)
          res.status(200).json({
            message: 'Login successful',
            user: user
          });
          _context2.next = 16;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          console.error('Error logging in user:', _context2.t0);
          res.status(500).json({
            message: 'Error logging in user. Please try again.'
          });

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 12]]);
};

module.exports = {
  registerUser: registerUser,
  loginUser: loginUser
};
//# sourceMappingURL=authController.dev.js.map
