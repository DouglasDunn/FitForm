const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const GoalSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
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

module.exports = Goal = mongoose.model('goal', GoalSchema);
