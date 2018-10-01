import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import { getCurrentProfile } from '../../actions/profileActions';
// import { getProfileByUsername, addNewProfile } from '../../actions/profileActions';

class Profile extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
    // if (this.props.match.params.username) {
    //   this.props.getProfileByUsername(this.props.match.params.username);
    // }
  }

  render() {
    const { profile, loading } = this.props.profile;
    const { user } = this.props.auth;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-12">
              <Link to={`/dashboard`} className="btn btn-primary">
                Back to Dashboard
              </Link>
              <div className="card card-body bg-info text-white mb-3">
                <div className="text-center">
                  <h1 className="display-4 text-center">{user.name}</h1>
                  <p>Gender: {profile.gender}</p>
                  <p>Age: {profile.age}</p>
                  <p>Current Weight: {profile.currentWeightInPounds}</p>
                  <p>Height: {profile.feet} feet {profile.inches} inches</p>
                </div>
              </div>
              <Link to={`/edit-profile`} className="btn btn-primary">
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
