import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Goal extends Component {
  render() {
    const { goal } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-10">
            <p className="lead">Current Weight: { goal.currentWeightInPounds }</p>
            <p className="lead">Goal Weight: { goal.goalWeightInPounds }</p>
            <p className="lead">Goal Date: { goal.goalDate }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Goal;
