const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const DailyProgressSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  workoutIntensityRating: {
    type: String,
    required: true
  },
  dietRating: {
    type: String,
    required: true
  },
  hoursOfSleep: {
    type: String,
    required: true
  },
  stressLevelRating: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = DailyProgress = mongoose.model('dailyProgress', DailyProgressSchema);
