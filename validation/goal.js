const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateGoalInput(data) {
  let errors = {};

  data.goalWeightInPounds = !isEmpty(data.goalWeightInPounds) ? data.goalWeightInPounds : '';
  data.goalDate = !isEmpty(data.goalDate) ? data.goalDate : '';

  if (Validator.isEmpty(data.goalWeightInPounds)) {
    errors.goalWeightInPounds = 'Goal weight in pounds is required';
  }

  if (Validator.isEmpty(data.goalDate)) {
    errors.goalDate = 'Goal date is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
