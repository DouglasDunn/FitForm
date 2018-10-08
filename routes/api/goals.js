const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Validation
const validateGoalInput = require('../../validation/goal');

// Goal model
const Goal = require('../../models/Goal');
// Profile model
const Profile = require('../../models/Profile');

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
        goalTimeline: 'current',
        user: req.user.id
      });
      newGoal.save().then(goal => res.json(goal));
    })
    .catch(err => res.status(404).json(err));
  }
);

// @route   POST api/goals/:id
// @desc    Edit goal
// @access  Private
router.post(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateGoalInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const goalFields = {};
    goalFields.user = req.user.id;
    if (req.body.goalWeightInPounds) goalFields.goalWeightInPounds = req.body.goalWeightInPounds;
    if (req.body.goalDate) goalFields.goalDate = req.body.goalDate;


    Profile.findOne({ user: req.user.id }).then(profile => {
      if (goal.currentWeightInPounds) goalFields.currentWeightInPounds = goal.currentWeightInPounds;

      // Update
      Goal.findOneAndUpdate(
        { _id: req.params.id },
        { $set: goalFields },
        { new: true }
      ).then(goal => res.json(goal));
    })
    .catch(err => res.status(404).json(err));
  }
);

// @route   POST api/goals
// @desc    Get current user's goal
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};

    Goal.find({ user: req.user.id })
      .sort({ date: -1 })
      .then(goals => {
        if (!goals) {
          errors.nogoals = 'There are no goals for this user';
          return res.status(404).json(errors);
        }
        res.json(goals);
    })
    .catch(err => res.status(404).json(err));
  }
);

// @route   GET api/goals/:id
// @desc    Get goal by id
// @access  Public
router.get('/:id', (req, res) => {
  Goal.findById(req.params.id)
    .then(goal => res.json(goal))
    .catch(err =>
      res.status(404).json({ nogoalfound: 'No goal found with that ID' })
    );
});

module.exports = router;
