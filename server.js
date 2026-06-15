require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// Core Middleware Configuration
app.use(cors());
app.use(express.json());

// Import API Routers
const issueRoutes = require('./routes/issueRoutes');
const authRoutes = require('./routes/authRoutes'); // <-- 1. Import the new auth routes

// Mount Routers onto Explicit Versioned/Scoped API Endpoints
app.use('/api/issues', issueRoutes);
app.use('/api/users', authRoutes); // <-- 2. Mount the auth router

// Base Diagnostic Route
app.get('/', (req, res) => {
  res.send('Hello DevPulse Engine');
});

// Initialize Server Listener
app.listen(PORT, () => {
  console.log(`Server executing securely on port ${PORT}`);
});