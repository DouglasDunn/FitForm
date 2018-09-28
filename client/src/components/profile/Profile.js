import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import { getProfileByUsername, addNewProfile } from '../../actions/profileActions';
// import { getProfileByUsername, addNewProfile } from '../../actions/profileActions';

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.username) {
      this.props.getProfileByUsername(this.props.match.params.username);
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-12">
              <Link to={`/dashboard`} className="btn btn-primary">
                Dashboard
              </Link>
              <div className="card card-body bg-info text-white mb-3">
                <div className="text-center">
                  <h1 className="display-4 text-center">{profile.user.name}</h1>
                  <p>{profile.gender}</p>
                  <p>{profile.age}</p>
                  <p>{profile.weightInPounds}</p>
                  <p>{profile.feet}</p>
                  <p>{profile.inches}</p>
                  <p>{profile.goalWeightInPounds}</p>
                  <p>{profile.goalDate}</p>
                </div>
              </div>
              <Link to={`/create-profile`} className="btn btn-primary">
                Add Another Goal
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
  getProfileByUsername: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileByUsername })(Profile);
