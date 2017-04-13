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
        <form onSubmit={this.props.login}>
          <input placeholder='Type your username here' onChange={this.props.updateUsernameValue}></input>
          <input type='password' placeholder='Type your password here' onChange={this.props.updatePasswordValue}></input>
          <button onClick={this.props.login}>Login</button>
        </form>
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
