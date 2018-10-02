const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Goal model
const Goal = require('../../models/Goal');
// Profile model
const Profile = require('../../models/Profile');

// Validation
const validateGoalInput = require('../../validation/goal');

// @route   POST api/goals
// @desc    Create goal
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateGoalInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    Profile.findOne({ user: req.user.id }).then(profile => {
      const newGoal = new Goal({
        currentWeightInPounds: profile.currentWeightInPounds,
        goalWeightInPounds: req.body.goalWeightInPounds,
        goalDate: req.body.goalDate,
        user: req.user.id
      });
      newGoal.save().then(goal => res.json(goal));
    })
    .catch(err => res.status(404).json(err));
  }
);

// @route   POST api/goals
// @desc    Create goal
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};

    Goal.find({ user: req.user.id }).then(goals => {
      if (!goals) {
        errors.nogoals = 'There are no goals for this user';
        return res.status(404).json(errors);
      }
      res.json(goals);
    })
    .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
