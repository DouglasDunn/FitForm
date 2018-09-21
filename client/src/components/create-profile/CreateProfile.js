import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';
import axios from 'axios';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      age: '',
      weightInPounds: '',
      feet: '',
      inches: '',
      goalWeightInPounds: '',
      goalDate: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      gender: this.state.gender,
      age: this.state.age,
      weightInPounds: this.state.weightInPounds,
      feet: this.state.feet,
      inches: this.state.inches,
      goalWeightInPounds: this.state.goalWeightInPounds,
      goalDate: this.state.goalDate
    }

    axios
      .post('/api/profile', profileData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {

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
                <SelectListGroup
                  placeholder="Gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                  options={genderOptions}
                  info="Input in your gender"
                />
                <TextFieldGroup
                  placeholder="Age"
                  name="age"
                  value={this.state.age}
                  onChange={this.onChange}
                  info="Input in your age"
                />
                <TextFieldGroup
                  placeholder="Weight In Pounds"
                  name="weightInPounds"
                  value={this.state.weightInPounds}
                  onChange={this.onChange}
                  info="Input in your weight in pounds"
                />
                <SelectListGroup
                  placeholder="Feet"
                  name="feet"
                  value={this.state.feet}
                  onChange={this.onChange}
                  options={feetOptions}
                  info="Input in your feet"
                />
                <SelectListGroup
                  placeholder="Inches"
                  name="inches"
                  value={this.state.inches}
                  onChange={this.onChange}
                  options={inchesOptions}
                  info="Input in your inches"
                />
                <TextFieldGroup
                  placeholder="Goal Weight In Pounds"
                  name="goalWeightInPounds"
                  value={this.state.goalWeightInPounds}
                  onChange={this.onChange}
                  info="Input in your goal weight in pounds"
                />
                <TextFieldGroup
                  name="goalDate"
                  type="date"
                  value={this.state.from}
                  onChange={this.onChange}
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

export default CreateProfile;
