const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const GoalSchema = new Schema({
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'profile'
  },
  goalWeightInPounds: {
    type: Number,
    required: true
  },
  goalDate: {
    type: Date,
    required: true
  }
});

// goalWeightInPounds: {
//   type: Number,
//   required: true
// },
// goalDate: {
//   type: Date,
//   required: true
// },

module.exports = Goal = mongoose.model('goal', GoalSchema);
