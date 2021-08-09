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
      <section>
          <div className="box full">
            <figure className="ness">
              <span></span>
              <figcaption>Random Pick of the Day</figcaption>
              {/* Need to get random lure to appear here */}
            </figure>
          </div>
          <section className="grid">
            <section className="column characters">
              <figure className="ness">
                <span>
                  <button className="box">Search</button>
                </span>
              </figure>
            </section>
          </section>
          <section className="column">
            <aside className="characters">
              <figure className="king">
                <span>
                  <button className="box">Add Lure</button>
                </span>
              </figure>
            </aside>
          </section>
      </section>
  
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
