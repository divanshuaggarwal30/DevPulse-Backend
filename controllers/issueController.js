const Issue = require('../models/Issue');

const getOpenIssues = async (req, res) => {
  try {
    const issues = await Issue.find();
    res.status(200).json({
      success: true,
      count: issues.length,
      data: issues
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error fetching issues' });
  }
};

const createIssue = async (req, res) => {
  try {
    const issue = await Issue.create(req.body);
    res.status(201).json({ success: true, data: issue });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

module.exports = { getOpenIssues, createIssue };