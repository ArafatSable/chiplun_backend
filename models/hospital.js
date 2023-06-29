const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HospitalSchema = new Schema({
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
  specialties: {
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

const Hospital = mongoose.model("Hospital", HospitalSchema);

module.exports = Hospital;
