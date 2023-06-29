const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TouristPlaceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
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
  tags: {
    type: [String],
    required: true
  }
});

const TouristPlace = mongoose.model('TouristPlace', TouristPlaceSchema);

module.exports = TouristPlace;
