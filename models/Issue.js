const mongoose = require('mongoose');

const issueSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' // Links the issue to the person who created it
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'Open'
  }
}, { timestamps: true });

module.exports = mongoose.model('Issue', issueSchema);