/**
 * @fileOverview The Login component.
 */

import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
          <TextField hintText='Type your email here' onChange={this.props.updateEmailValue} type='email' /><br/>
          <TextField hintText='Type your password here' onChange={this.props.updatePasswordValue} type='password' /><br/>
          <RaisedButton label='Login' onClick={this.login} />
        </form>
      </div>
    );
  }

}

/** @const {Object} propTypes definition */
Login.propTypes = {
  updateEmailValue: React.PropTypes.func,
  updatePasswordValue: React.PropTypes.func,
  login: React.PropTypes.func
};
