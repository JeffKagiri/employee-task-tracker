// src/models/User.js
const mongoose = require('mongoose');

// User model for authentication and task ownership
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  // Role defines the user's type. You can expand later (e.g., admin)
  role: {
    type: String,
    enum: ['employee', 'manager'], // safe predefined roles
    default: 'employee'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Instance method to return safe public user info (no password)
UserSchema.methods.toPublic = function () {
  const { _id, name, email, role, createdAt } = this;
  return { id: _id, name, email, role, createdAt };
};

module.exports = mongoose.model('User', UserSchema);
