// Temporarily disconnected from MongoDB
// const Issue = require('../models/Issue');

const mockIssues = [
  {
    _id: "bypass_01",
    title: "Uncaught SyntaxError in parsing large LLM token streams",
    repository: "DevPulse-Backend",
    description: "The streaming JSON parser crashes when token chunks split a multi-byte character.",
    status: "Open"
  },
  {
    _id: "bypass_02",
    title: "Tailwind v4 PostCSS compilation slow down",
    repository: "DevPulse-Frontend",
    description: "HMR latency spikes when injecting utility classes via runtime transitions.",
    status: "In Progress"
  }
];

const getOpenIssues = async (req, res) => {
  res.status(200).json({
    success: true,
    count: mockIssues.length,
    data: mockIssues
  });
};

const createIssue = async (req, res) => {
  res.status(201).json({
    success: true,
    data: { ...req.body, _id: "new_bypass_id" }
  });
};

module.exports = { getOpenIssues, createIssue };