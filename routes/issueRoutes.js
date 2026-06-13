const express = require('express');
const router = express.Router();
const { getOpenIssues } = require('../controllers/issueController');

// Map GET requests on the root of this router to the controller function
router.get('/', getOpenIssues);

module.exports = router;