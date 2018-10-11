import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Goals from './Goals';
import Spinner from '../common/Spinner';
import { Link } from 'react-router-dom';
import { getGoals } from '../../actions/goalActions';

class MyGoals extends Component {
  componentDidMount() {
    this.props.getGoals();
  }

  render() {
    const { goals, loading } = this.props.goal;
    let goalContent;

    if (goals === null || loading) {
      goalContent = <Spinner />;
    } else {
      goalContent = <Goals goals={goals} />
    }

    return (
      <div className="my-goals">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to={`/dashboard`} className="btn btn-primary">
                Back to Dashboard
              </Link>
              <h1>My Goals</h1>
              {goalContent}
              <Link to="/add-goal" className="btn btn-lg btn-info">
                Add a Goal
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MyGoals.propTypes = {
  getGoals: PropTypes.func.isRequired,
  goal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  goal: state.goal
});

export default connect (mapStateToProps, { getGoals })(MyGoals);
