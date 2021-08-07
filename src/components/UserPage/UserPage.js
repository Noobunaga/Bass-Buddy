import React, { Component } from 'react';
import { connect } from 'react-redux';
//import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      // <div>
      //   <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
      //   <p>Your ID is: {this.props.store.user.id}</p>
      //   <LogOutButton className="box" />
      // </div>
      <main>
        <section className="grid">
          <section className="column characters">
            <figure className="ness">
              <span></span>
              <figcaption className="box">Random Pick of the Day</figcaption>
              {/* Need to get random lure to appear here */}
            </figure>
          </section>
        </section>
      </main>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
