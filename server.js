require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Core Middleware Configuration
app.use(cors());
app.use(express.json());

// Import API Routers
const issueRoutes = require('./routes/issueRoutes');

// Mount Routers onto Explicit Versioned/Scoped API Endpoints
app.use('/api/issues', issueRoutes);

// Base Diagnostic Route
app.get('/', (req, res) => {
  res.send('Hello DevPulse Engine');
});

// Initialize Server Listener
app.listen(PORT, () => {
  console.log(`Server executing securely on port ${PORT}`);
});