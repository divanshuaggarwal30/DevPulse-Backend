const Issue = require('../models/Issue');

// Get all issues for the logged-in user
const getIssues = async (req, res) => {
  try {
    const issues = await Issue.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(issues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new issue
const createIssue = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    
    const issue = await Issue.create({
      title,
      description,
      status: status || 'Open',
      user: req.user._id
    });

    res.status(201).json(issue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getIssues, createIssue };