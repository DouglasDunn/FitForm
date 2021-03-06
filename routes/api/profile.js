const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validateProfileInput = require('../../validation/profile');

// Load Profile Model
const Profile = require('../../models/Profile');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no profile for this user';
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   GET api/profile
// @desc    Get profile by handle
// @access  Public

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
  const errors = {};

  Profile.findOne({ username: req.params.username })
    .populate('user', ['name', 'avatar'])
    .then(profile => {
      if (!profile) {
        errors.noprofile = 'There is no profile for this user';
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.username) profileFields.username = req.body.username;
    if (req.body.gender) profileFields.gender = req.body.gender;
    if (req.body.age) profileFields.age = req.body.age;
    if (req.body.currentWeightInPounds) profileFields.currentWeightInPounds = req.body.currentWeightInPounds;
    if (req.body.feet) profileFields.feet = req.body.feet;
    if (req.body.inches) profileFields.inches = req.body.inches;

    Profile.findOne({ user: req.user.id }).then(myProfile => {
      if (myProfile) {
        // Check if username exists
        Profile.findOne({ username: profileFields.username }).then(someonesProfile => {
          if (someonesProfile && someonesProfile.username !== myProfile.username) {
            errors.username = 'That username already exists';
            return res.status(400).json(errors);
          } else {
            // Update
            Profile.findOneAndUpdate(
              { user: req.user.id },
              { $set: profileFields },
              { new: true }
            ).then(profile => res.json(profile));
          }

          // // Update
          // Profile.findOneAndUpdate(
          //   { user: req.user.id },
          //   { $set: profileFields },
          //   { new: true }
          // ).then(profile => res.json(profile));
        });
      } else {
        // Create

        // Check if username exists
        Profile.findOne({ username: profileFields.username }).then(profile => {
          if (profile) {
            errors.username = 'That username already exists';
            return res.status(400).json(errors);
          }

          // Save Profile
          new Profile(profileFields).save().then(profile =>
          res.json(profile));
        });
      }
    });

    // // Save Profile
    // new Profile(profileFields).save().then(profile =>
    // res.json(profile));

    // Profile.findOne({ user: req.user.id }).then(profile => {
    //   if (profile) {
    //     // Update
    //     Profile.findOneUpdate(
    //       { user: req.user.id },
    //       { $set: profileFields },
    //       { new: true }
    //     ).then(profile => res.json(profile));
    //   } else {
    //     // Create
    //
    //     // Check if username exists
    //     // Profile.findOne({ username: profileFields.username }).then(profile => {
    //     //   if (profile) {
    //     //     errors.username = 'That username already exists';
    //     //     res.status(400).json(errors);
    //     //   }
    //
    //       // Save Profile
    //       new Profile(profileFields).save().then(profile =>
    //       res.json(profile));
    //     //});
    //   }
    // });
  }
);

module.exports = router;
