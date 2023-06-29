const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  cuisine: {
    type: [String],
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  images: {
    type: [String],
    required: true
  },
  description: {
    type: [String],
    required: true
  }
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
