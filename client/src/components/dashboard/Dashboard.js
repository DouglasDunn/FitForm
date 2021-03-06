import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGoals } from '../../actions/goalActions';
import Spinner from '../common/Spinner';
import Calendar from './Calendar';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getGoals();
  }

  onDayClick = (e, day, today, dayClickedOn) => {
    alert(day);

    console.log("today: ", today)
    console.log("clicked on: ", dayClickedOn);
    if (today === dayClickedOn) {
      console.log("equal");
    } else if (today < dayClickedOn) {
      console.log("dayClickedOn is greater");
    } else if (today > dayClickedOn) {
      console.log("today is greater");
    }
  }

  render() {
    const { user } = this.props.auth;
    const { goals, loading } = this.props.goal;
    const style = {
      position: "relative",
      margin: "50px auto"
    };

    let dashboardContent;

    if (goals === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(goals).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome {user.name}
            </p>
            <Link to={`/profile`} className="btn btn-primary">
              <i className="fas fa-watch-fitness text-info mr-1" />
              Profile
            </Link>
            <Link to={`/my-goals`} className="btn btn-primary">
              <i className="fas fa-watch-fitness text-info mr-1" />
              Goals
            </Link>
            <Calendar style={style} width="302px" onDayClick={(e, day, today, dayClickedOn) => this.onDayClick(e, day, today, dayClickedOn)} />
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You do not have any goals yet, please add a goal</p>
            <Link to="/add-goal" className="btn btn-lg btn-info">
              Create a Goal
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Dashboard.propTypes = {
//   getGoals: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   profile: PropTypes.object.isRequired
// };

Dashboard.propTypes = {
  getGoals: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  goal: state.goal,
  auth: state.auth
});

export default connect(mapStateToProps, { getGoals })(
  Dashboard
);
