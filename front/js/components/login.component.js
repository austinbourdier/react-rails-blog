/**
 * @fileOverview The Login component.
 */

import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <li><Link to='/register'>REGISTER HERE</Link></li>
        <input placeholder='Type your username here' onChange={this.props.updateUsernameValue}></input>
        <input placeholder='Type your password here' onChange={this.props.updatePasswordValue}></input>
        <button onClick={this.props.login}>Login</button>
      </div>
    );
  }

}

/** @const {Object} propTypes definition */
Login.propTypes = {
  updateUsernameValue: React.PropTypes.func,
  updatePasswordValue: React.PropTypes.func,
  login: React.PropTypes.func
};
