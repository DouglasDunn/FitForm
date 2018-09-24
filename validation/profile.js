const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';
  data.gender = !isEmpty(data.gender) ? data.gender : '';
  data.age = !isEmpty(data.age) ? data.age : '';
  data.weightInPounds = !isEmpty(data.weightInPounds) ? data.weightInPounds : '';
  data.feet = !isEmpty(data.feet) ? data.feet : '';
  data.inches = !isEmpty(data.inches) ? data.inches : '';
  data.goalWeightInPounds = !isEmpty(data.goalWeightInPounds) ? data.goalWeightInPounds : '';
  data.goalDate = !isEmpty(data.goalDate) ? data.goalDate : '';

  if (!Validator.isLength(data.username, { min: 2, max: 40 })) {
    errors.username = 'Username needs to be between 2 and 40 characters.';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username is required.'
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'Gender is required.';
  }

  if (Validator.isEmpty(data.age)) {
    errors.age = 'Age is required.';
  }

  if (Validator.isEmpty(data.weightInPounds)) {
    errors.weightInPounds = 'Weight In Pounds is required.';
  }

  if (Validator.isEmpty(data.feet)) {
    errors.feet = 'Feet is required.';
  }

  if (Validator.isEmpty(data.inches)) {
    errors.inches = 'Inches is required.';
  }

  if (Validator.isEmpty(data.goalWeightInPounds)) {
    errors.goalWeightInPounds = 'Goal Weight In Pounds is required.';
  }

  if (Validator.isEmpty(data.goalDate)) {
    errors.goalDate = 'Goal Date is required.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};
