const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes'); // Import auth routes

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// Connect to MongoDB
connectDB();

// Use the authentication routes
app.use('/api', authRoutes); // Prefix routes with '/api'

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
