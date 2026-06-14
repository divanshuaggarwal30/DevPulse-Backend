const Issue = require('../models/Issue');

// @desc    Get all open issues from the database
// @route   GET /api/issues
const getOpenIssues = async (req, res) => {
  try {
    // .find() grabs every document inside the Issues collection
    const issues = await Issue.find(); 

    res.status(200).json({
      success: true,
      count: issues.length,
      data: issues
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error fetching issues'
    });
  }
};

// @desc    Create a new issue in the database
// @route   POST /api/issues
const createIssue = async (req, res) => {
  try {
    // req.body contains the JSON sent from the frontend/Postman
    const issue = await Issue.create(req.body);

    res.status(201).json({
      success: true,
      data: issue
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Export both functions cleanly in one single block
module.exports = {
  getOpenIssues,
  createIssue
};