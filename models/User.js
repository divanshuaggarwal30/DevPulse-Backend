// Pre-save hook to hash the password (Modern Async Version)
UserSchema.pre('save', async function () {
  // If the password hasn't been changed, skip the hashing
  if (!this.isModified('password')) return;
  
  // Hash the password securely
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});