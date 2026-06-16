require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// Core Middleware Configuration
app.use(cors({
  origin: [
      'https://dev-pulse-frontend-eight.vercel.app', 
      'https://devpulse-frontend.vercel.app',
      'https://devpulse-telemetry.vercel.app'
    ],  
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Import API Routers
const issueRoutes = require('./routes/issueRoutes');
const authRoutes = require('./routes/authRoutes'); // Assuming your file is named authRoutes.js

// Mount Routers
app.use('/api/issues', issueRoutes);
app.use('/api/users', authRoutes); // This means login is at /api/users/login

// Base Diagnostic Route
app.get('/', (req, res) => {
  res.send('Hello DevPulse Engine');
});

// Initialize Server Listener
app.listen(PORT, () => {
  console.log(`Server executing securely on port ${PORT}`);
});