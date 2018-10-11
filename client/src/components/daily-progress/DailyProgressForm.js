import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class DailyProgressForm extends Component {
  render() {
    const { dateClickedOn } = this.props.location.state;

    return (
      <div className="goal-form">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">{ dateClickedOn }</h1>
              <form>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DailyProgressForm);
