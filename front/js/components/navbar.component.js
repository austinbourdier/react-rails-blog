/**
 * @fileOverview The Login component.
 */

import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
  render() {
    let userId = '';
    document.cookie.split('; ').forEach((cookie) => {
      if (cookie.match(new RegExp('current_user_id=([^;]+)'))) {
        userId = cookie.split('=')[1];
      }
    })
    return (
      <div>
        <li><Link to="/">HOME PAGE</Link></li>
        <li><Link to={'/user/' + userId}>User Profile</Link></li>
        <li><Link to='/create'>Create Post</Link></li>
      </div>
    );
  }

}

/** @const {Object} propTypes definition */
Navbar.propTypes = {

};
