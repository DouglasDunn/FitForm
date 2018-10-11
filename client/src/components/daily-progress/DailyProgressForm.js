import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { addDailyProgress, clearErrors } from '../../actions/dailyProgressActions';

class DailyProgressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutIntensityRating: '',
      dietRating: '',
      hoursOfSleep: '',
      stressLevelRating: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.props.clearErrors();
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const newDailyProgress = {
      workoutIntensityRating: this.state.workoutIntensityRating,
      dietRating: this.state.dietRating,
      hoursOfSleep: this.state.hoursOfSleep,
      stressLevelRating: this.state.stressLevelRating
    };

    this.props.addDailyProgress(newDailyProgress, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    const { dateClickedOn } = this.props.location.state;

    return (
      <div className="goal-form">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">{ dateClickedOn }</h1>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Workout Intensity Rating"
                  name="workoutIntensityRating"
                  value={this.state.workoutIntensityRating}
                  onChange={this.onChange}
                  error={errors.workoutIntensityRating}
                  info="Input in your workout intensity rating"
                />
                <TextFieldGroup
                  placeholder="Diet Rating"
                  name="dietRating"
                  value={this.state.dietRating}
                  onChange={this.onChange}
                  error={errors.dietRating}
                  info="Input in your diet rating"
                />
                <TextFieldGroup
                  placeholder="Hours Of Sleep"
                  name="hoursOfSleep"
                  value={this.state.hoursOfSleep}
                  onChange={this.onChange}
                  error={errors.hoursOfSleep}
                  info="Input in your hours of sleep"
                />
                <TextFieldGroup
                  placeholder="Stress Level Rating"
                  name="stressLevelRating"
                  value={this.state.stressLevelRating}
                  onChange={this.onChange}
                  error={errors.stressLevelRating}
                  info="Input in your stress level rating"
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

DailyProgressForm.propTypes = {
  addDailyProgress: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { addDailyProgress })(
  withRouter(DailyProgressForm)
);
