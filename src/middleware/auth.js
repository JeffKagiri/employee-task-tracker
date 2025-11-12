// src/middleware/auth.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

/*
  Middleware: auth
  Purpose:
  - Protect private routes.
  - Verify JWT token from 'Authorization' header.
  - Attach user data (id and role) to req.user if valid.
  Expected header format: Authorization: Bearer <token>
*/

module.exports = function (req, res, next) {
  const authHeader = req.header('Authorization');

  // Check if token exists
  if (!authHeader) {
    return res.status(401).json({ msg: 'No token provided. Authorization denied.' });
  }

  // Validate header format
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ msg: 'Invalid token format. Expected: Bearer <token>' });
  }

  const token = parts[1];

  try {
    // Verify token using secret from .env
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded user info to request (used by controllers)
    req.user = {
      id: decoded.userId,
      role: decoded.role // role included for authorization checks
    };

    next(); // Continue to next middleware or controller
  } catch (err) {
    console.error('Token verification failed:', err.message);
    return res.status(401).json({ msg: 'Token is invalid or expired.' });
  }
};
