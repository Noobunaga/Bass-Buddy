import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="box full">
      <Link to="/home">
        <h2 className="nav-title">Bass Buddy</h2>
      </Link>
      <div className="nav-right">
        <Link className="box" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            <Link className="box" to="/info">
              Library
            </Link>
            <LogOutButton className="box" />
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        {/* <Link className="box" to="/about">
          About
        </Link> */}
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
