import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Goal from './Goal';

class Goals extends Component {
  render() {
    const { goals, profile } = this.props;

    // return goals.map(goal => <Goal key={goal._id} goal={goal} currentWeightInPounds={currentWeightInPounds} />);
    return goals.map(goal => <Goal key={goal._id} goal={goal} />);
  }
}

Goals.propTypes = {
  goals: PropTypes.array.isRequired
};

export default Goals;
