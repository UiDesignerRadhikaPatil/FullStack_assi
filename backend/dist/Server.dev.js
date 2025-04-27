"use strict";

var express = require('express');

var cors = require('cors');

var dotenv = require('dotenv');

var connectDB = require('./config/db');

var authRoutes = require('./routes/authRoutes'); // Import auth routes


dotenv.config();
var app = express(); // Middleware

app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests
// Connect to MongoDB

connectDB(); // Use the authentication routes

app.use('/api', authRoutes); // Prefix routes with '/api'
// Start the server

var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});
//# sourceMappingURL=Server.dev.js.map
