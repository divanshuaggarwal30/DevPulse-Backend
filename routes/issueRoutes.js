const express = require('express');
const router = express.Router();
const { getIssues, createIssue } = require('../controllers/issueController');
const { protect } = require('../middleware/authMiddleware'); // Import the bouncer

// Apply the "protect" bouncer to both routes so only logged-in users can access them
router.route('/').get(protect, getIssues).post(protect, createIssue);

module.exports = router;