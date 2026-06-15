const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// 1. Define the Schema first!
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  company: { type: String },
  role: { type: String },
  password: { type: String, required: true }
}, { timestamps: true });

// 2. The Modern, Async Pre-save Hook (No 'next' required)
UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// 3. The Password Match Method for Logging In Later
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// 4. Export the Model
module.exports = mongoose.model('User', UserSchema);