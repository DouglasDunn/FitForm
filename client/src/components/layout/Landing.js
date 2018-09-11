import React, { Component } from 'react';

class Landing extends Component {
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
