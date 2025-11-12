// src/controllers/authController.js
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const User = require('../models/User');

/*
  Controller: authController
  Purpose:
  - Handle user registration and login.
  - Issue JWT tokens.
  - Provide a route to get current user data.
*/

// REGISTER new user
exports.register = async (req, res) => {
  // Validate request body fields
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create a new user instance
    user = new User({ name, email, password });

    // Hash password for security
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save new user
    await user.save();

    // Create JWT payload
    const payload = { userId: user.id, role: user.role };

    // Sign token
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '7d'
    });

    // Return token to client
    res.status(201).json({ token });
  } catch (err) {
    console.error('Error in register:', err.message);
    res.status(500).send('Server error');
  }
};

// LOGIN existing user
exports.login = async (req, res) => {
  // Validate request body fields
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create JWT payload
    const payload = { userId: user.id, role: user.role };

    // Sign token
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '7d'
    });

    // Return token to client
    res.json({ token });
  } catch (err) {
    console.error('Error in login:', err.message);
    res.status(500).send('Server error');
  }
};

// GET current logged-in user profile
exports.getMe = async (req, res) => {
  try {
    // req.user.id comes from auth middleware after JWT verification
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Use the model method to return safe user info (no password)
    res.json(user.toPublic());
  } catch (err) {
    console.error('Error in getMe:', err.message);
    res.status(500).send('Server error');
  }
};
