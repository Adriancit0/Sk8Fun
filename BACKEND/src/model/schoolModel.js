const { model, Schema } = require('mongoose');

const schoolModel = Schema({
  info: {
    name: String,
    phone: Number,
    mail: String,
    address: String,
    imageUrl: String,
    description: String,
    createdBy: String
  },
  plant: {
    skateBoards: Boolean,
    protections: Boolean,
    shower: Boolean,
    parking: Boolean,
    cofeeShop: Boolean
  },
  activities: [{
    description: String,
    level: String,
    schedule: String,
    price: {
      quantity: Number,
      unity: String
    },
    places: Number,
    likes: Number
  }],
  popularity: Number
});

module.exports = model('School', schoolModel);
