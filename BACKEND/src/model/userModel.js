const { model, Schema } = require('mongoose');

const userModel = Schema({
  name: String,
  mail: String,
  password: String,
  image: String,
  phone: Number,
  typeOfUser: String,
  activityHistory: [String],
  interested: [String]
});

userModel.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('User', userModel);
