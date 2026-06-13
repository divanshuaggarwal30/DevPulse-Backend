// Mock data mimicking an external GitHub API payload for open issues
const mockIssues = [
  {
    id: "issue_01",
    title: "Uncaught SyntaxError in parsing large LLM token streams",
    repository: "DevPulse-Backend",
    description: "The streaming JSON parser crashes when token chunks split a multi-byte character at the chunk boundary."
  },
  {
    id: "issue_02",
    title: "Tailwind v4 PostCSS compilation slow down on dynamic classes",
    repository: "DevPulse-Frontend",
    description: "Hot Module Replacement (HMR) latency spikes when injecting utility classes via runtime state transitions."
  },
  {
    id: "issue_03",
    title: "Implement Zod schema validation for prompt injection defense",
    repository: "DevPulse-Backend",
    description: "Need middleware validation layer to intercept and scrub inbound user prompt payloads before execution."
  }
];

// Controller function to get all open issues
const getOpenIssues = (req, res) => {
  res.status(200).json({
    success: true,
    count: mockIssues.length,
    data: mockIssues
  });
};

module.exports = {
  getOpenIssues
};