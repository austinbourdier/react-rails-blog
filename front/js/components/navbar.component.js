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
    });
    return (
      <div>
        <nav className='navbar navbar-default navbar-fixed-top'>
          <div className='container'>
            <ul className="nav navbar-nav">
              <li><Link to='/'>HOME PAGE</Link></li>
              <li><Link to={'/user/' + userId}>User Stats</Link></li>
              <li>Current User: {this.props.user.email}</li>
              <li onClick={this.props.logout}>Logout</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

  componentDidMount() {
    this.props.getUserInfo();
  }
}

/** @const {Object} propTypes definition */
Navbar.propTypes = {
  getUserInfo: React.PropTypes.func,
  logout: React.PropTypes.func,
  user: React.PropTypes.object
};
