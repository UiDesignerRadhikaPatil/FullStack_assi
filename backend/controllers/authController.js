const User = require('../models/User'); // Assuming you have a User model

// Register a new user
const registerUser = async (req, res) => {
  const { name, email, password, address, role } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({
      name,
      email,
      password, // You may want to hash the password before saving
      address,
      role,
    });

    // Save the user to the database
    await newUser.save();

    // Respond with success message and user data
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ message: 'Error registering user. Please try again.' });
  }
};

// Login user (basic example, consider adding password hashing and JWT)
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Validate password (hashing needed for production)
    if (user.password !== password) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    // Respond with the user (consider JWT for better security)
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    console.error('Error logging in user:', err);
    res.status(500).json({ message: 'Error logging in user. Please try again.' });
  }
};

module.exports = { registerUser, loginUser };
