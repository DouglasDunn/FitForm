const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  username: {
    type: String,
    required: true,
    max: 40
  },
  gender: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  currentWeightInPounds: {
    type: Number,
    required: true
  },
  feet: {
    type: Number,
    required: true
  },
  inches: {
    type: Number,
    required: true
  },
  // goalWeightInPounds: {
  //   type: Number,
  //   required: true
  // },
  // goalDate: {
  //   type: Date,
  //   required: true
  // },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
