import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile, clearErrors } from '../../actions/profileActions';

class CreateProfile extends Component {
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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
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
    };

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
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '5', value: '5' },
      { label: '6', value: '6' }
    ];

    const inchesOptions = [
      { label: '* Select a inches', value: '' },
      { label: '0', value: '0' },
      { label: '1', value: '1' },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '5', value: '5' },
      { label: '6', value: '6' },
      { label: '7', value: '7' },
      { label: '8', value: '8' },
      { label: '9', value: '9' },
      { label: '10', value: '10' },
      { label: '11', value: '11' }
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                We will get some information to make your profile stand out
              </p>
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

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile, clearErrors })(
  withRouter(CreateProfile)
);
