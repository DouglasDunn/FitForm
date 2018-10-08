const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const GoalSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  currentWeightInPounds: {
    type: String,
    required: true
  },
  goalWeightInPounds: {
    type: String,
    required: true
  },
  goalDate: {
    type: Date,
    required: true
  },
  goalTimeline: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Goal = mongoose.model('goal', GoalSchema);
