const { model, Schema } = require('mongoose');

const userModel = Schema({
  name: String,
  image: String,
  phone: Number,
  mail: String,
  activityHistory: [String],
  interested: [String]
});

module.exports = model('User', userModel);
