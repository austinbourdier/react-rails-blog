/**
 * @fileOverview The Login component.
 */

import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }
  login(e) {
    e.preventDefault();
    this.props.login();
  }
  render() {
    return (
      <div>
        <li><Link to='/register'>REGISTER HERE</Link></li>
        <form onSubmit={this.login}>
          <input placeholder='Type your username here' onChange={this.props.updateUsernameValue}></input>
          <input type='password' placeholder='Type your password here' onChange={this.props.updatePasswordValue}></input>
          <button onClick={this.login}>Login</button>
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
