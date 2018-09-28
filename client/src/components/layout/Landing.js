import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4 mt-5">Fitness Transformation</h1>
              <p className="lead">
                {' '}
                A simple application that will help you reach your fitness goals
              </p>
              <Link to={`/register`} className="btn btn-primary">
                Sign Up
              </Link>
              <p className="loginParagraph">
                Already using FitForm?
                <Link className="loginLink" to="/login">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
