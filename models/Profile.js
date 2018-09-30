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
    type: String,
    required: true
  },
  currentWeightInPounds: {
    type: String,
    required: true
  },
  feet: {
    type: String,
    required: true
  },
  inches: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
