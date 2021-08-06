import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {
  state = {
    heading: 'Class Component',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <section className="grid">
      <div className="box">
        <h2>{this.state.heading}</h2>

        <div className="grid">
          <div className="box">
            <RegisterForm />

            <center>
              <h4>Already a Member?</h4>
              <button className="box" onClick={this.onLogin}>
                Login
              </button>
            </center>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
