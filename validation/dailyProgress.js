const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateGoalInput(data) {
  let errors = {};

  data.workoutIntensityRating = !isEmpty(data.workoutIntensityRating) ? data.workoutIntensityRating : '';
  data.dietRating = !isEmpty(data.dietRating) ? data.dietRating : '';
  data.hoursOfSleep = !isEmpty(data.hoursOfSleep) ? data.hoursOfSleep : '';
  data.stressLevelRating = !isEmpty(data.stressLevelRating) ? data.stressLevelRating : '';

  if (Validator.isEmpty(data.workoutIntensityRating)) {
    errors.workoutIntensityRating = 'Workout intensity rating is required';
  }

  if (Validator.isEmpty(data.dietRating)) {
    errors.dietRating = 'Diet rating is required';
  }

  if (Validator.isEmpty(data.hoursOfSleep)) {
    errors.hoursOfSleep = 'Hours of sleep is required';
  }

  if (Validator.isEmpty(data.stressLevelRating)) {
    errors.stressLevelRating = 'Stress level rating is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
