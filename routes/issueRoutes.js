const express = require('express');
const router = express.Router();
const { getOpenIssues, createIssue } = require('../controllers/issueController');

router.route('/')
  .get(getOpenIssues)
  .post(createIssue); // Add the POST route here

module.exports = router;