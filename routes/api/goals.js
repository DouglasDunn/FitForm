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

    const newGoal = new Goal({
      goalWeightInPounds: req.body.goalWeightInPounds,
      goalDate: req.body.goalDate,
      user: req.user.id
    });

    newGoal.save().then(goal => res.json(goal));
  }
);

module.exports = router;
