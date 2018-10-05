import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { editGoal, getGoal, clearErrors } from '../../actions/goalActions';
import isEmpty from '../../validation/is-empty';

class GoalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goalWeightInPounds: '',
      goalDate: '',
      id: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.clearErrors();
    this.props.getGoal(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.goal.goal) {
      const goal = nextProps.goal.goal;

      // If goal field doesn't exist, make empty string
      goal.goalWeightInPounds = !isEmpty(goal.goalWeightInPounds) ? goal.goalWeightInPounds : '';
      goal.goalDate = !isEmpty(goal.goalDate) ? goal.goalDate : '';
      
      // Set component fields state
      this.setState({
        goalWeightInPounds: goal.goalWeightInPounds,
        goalDate: goal.goalDate,
        id: goal._id
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const newGoal = {
      goalWeightInPounds: this.state.goalWeightInPounds,
      goalDate: this.state.goalDate
    };

    this.props.editGoal(newGoal, this.state._id, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="edit-goal">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/my-goals" className="btn btn-primary">
                Back to My Goals
              </Link>
              <h1 className="display-4 text-center">Edit Goal</h1>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Goal Weight In Pounds"
                  name="goalWeightInPounds"
                  value={this.state.goalWeightInPounds}
                  onChange={this.onChange}
                  error={errors.goalWeightInPounds}
                  info="Input in your goal weight in pounds"
                />
                <TextFieldGroup
                  name="goalDate"
                  type="date"
                  value={this.state.goalDate}
                  onChange={this.onChange}
                  error={errors.goalDate}
                  info="Input in your goal date"
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

GoalForm.propTypes = {
  editGoal: PropTypes.func.isRequired,
  getGoal: PropTypes.func.isRequired,
  goal: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  goal: state.goal,
  errors: state.errors
});

export default connect(mapStateToProps, { editGoal, getGoal })(
  withRouter(GoalForm)
);
