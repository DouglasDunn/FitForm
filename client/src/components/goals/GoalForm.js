import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { addGoal, clearErrors } from '../../actions/goalActions';

class GoalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goalWeightInPounds: '',
      goalDate: '',
      goalTimeline: '',
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

    const newGoal = {
      goalWeightInPounds: this.state.goalWeightInPounds,
      goalDate: this.state.goalDate
    };

    this.props.addGoal(newGoal, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="goal-form">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create a Goal</h1>
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
  addGoal: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps, { addGoal })(
  withRouter(GoalForm)
);
