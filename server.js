require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows parsing of incoming JSON payloads

// Base Route
app.get('/', (req, res) => {
    res.send('Hello DevPulse');
});

// Boot Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});