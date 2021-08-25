import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import LoginForm from '../LoginForm/LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginForm />

        <center>
        <figure>
          <button
            type="button"
            className="box"
            onClick={() => {
              this.props.history.push('/registration');
            }}
          >
            Register
          </button>
          </figure>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
