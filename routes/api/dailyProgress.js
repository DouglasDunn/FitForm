const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Validation
const validateDailyProgressInput = require('../../validation/dailyProgress');

// DailyProgress model
const DailyProgress = require('../../models/DailyProgress');

// @route   POST api/daily-progress
// @desc    Create dailyProgress
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateDailyProgressInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const newDailyProgress = new DailyProgress({
      workoutIntensityRating: req.body.workoutIntensityRating,
      dietRating: req.body.dietRating,
      hoursOfSleep: req.body.hoursOfSleep,
      stressLevelRating: req.body.stressLevelRating,
      user: req.user.id
    });

    newDailyProgress.save().then(newDailyProgress => res.json(newDailyProgress));
  }
);

module.exports = router;
