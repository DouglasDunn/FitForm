import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile, getCurrentProfile, clearErrors } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      gender: '',
      age: '',
      currentWeightInPounds: '',
      feet: '',
      inches: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // If profile field doesn't exist, make empty string
      profile.username = !isEmpty(profile.username) ? profile.username : '';
      profile.gender = !isEmpty(profile.gender) ? profile.gender : '';
      profile.age = !isEmpty(profile.age) ? profile.age : '';
      profile.currentWeightInPounds = !isEmpty(profile.currentWeightInPounds) ? profile.currentWeightInPounds : '';
      profile.feet = !isEmpty(profile.feet) ? profile.feet : '';
      profile.inches = !isEmpty(profile.inches) ? profile.inches : '';

      // Set component fields state
      this.setState({
        username: profile.username,
        gender: profile.gender,
        age: profile.age,
        currentWeightInPounds: profile.currentWeightInPounds,
        feet: profile.feet,
        inches: profile.inches
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      username: this.state.username,
      gender: this.state.gender,
      age: this.state.age,
      currentWeightInPounds: this.state.currentWeightInPounds,
      feet: this.state.feet,
      inches: this.state.inches
    }

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    // Select options for gender, feet, inches
    const genderOptions = [
      { label: '* Select a gender', value: '' },
      { label: 'Male', value: 'Male' },
      { label: 'Female', value: 'Female' }
    ];

    const feetOptions = [
      { label: '* Select a feet', value: '' },
      { label: 3, value: 3 },
      { label: 4, value: 4 },
      { label: 5, value: 5 },
      { label: 6, value: 6 }
    ];

    const inchesOptions = [
      { label: '* Select a inches', value: '' },
      { label: 0, value: 0 },
      { label: 1, value: 1 },
      { label: 2, value: 2 },
      { label: 3, value: 3 },
      { label: 4, value: 4 },
      { label: 5, value: 5 },
      { label: 6, value: 6 },
      { label: 7, value: 7 },
      { label: 8, value: 8 },
      { label: 9, value: 9 },
      { label: 10, value: 10 },
      { label: 11, value: 11 }
    ];

    return (
      <div className="edit-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/profile" className="btn btn-primary">
                Back to Profile
              </Link>
              <h1 className="display-4 text-center">Edit Profile</h1>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  error={errors.username}
                  info="Input in your username"
                />
                <SelectListGroup
                  placeholder="Gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                  options={genderOptions}
                  error={errors.gender}
                  info="Input in your gender"
                />
                <TextFieldGroup
                  placeholder="Age"
                  name="age"
                  value={this.state.age}
                  onChange={this.onChange}
                  error={errors.age}
                  info="Input in your age"
                />
                <TextFieldGroup
                  placeholder=" Current Weight In Pounds"
                  name="currentWeightInPounds"
                  value={this.state.currentWeightInPounds}
                  onChange={this.onChange}
                  error={errors.currentWeightInPounds}
                  info="Input in your current weight in pounds"
                />
                <SelectListGroup
                  placeholder="Feet"
                  name="feet"
                  value={this.state.feet}
                  onChange={this.onChange}
                  options={feetOptions}
                  error={errors.feet}
                  info="Input in your feet"
                />
                <SelectListGroup
                  placeholder="Inches"
                  name="inches"
                  value={this.state.inches}
                  onChange={this.onChange}
                  options={inchesOptions}
                  error={errors.inches}
                  info="Input in your inches"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile, clearErrors })(
  withRouter(EditProfile)
);
