const { model, Schema } = require('mongoose');

const userModel = Schema({
  name: String,
  email: String,
  password: String,
  image: String,
  phone: Number,
  role: String,
  activityHistory: [String],
  interested: [String]
});

userModel.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('User', userModel);
