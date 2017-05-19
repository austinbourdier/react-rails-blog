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
        <form className='form-signin' onSubmit={this.login}>
          <h2 className='form-signin-heading'>Please sign in</h2>
          <label htmlFor='inputEmail' className='sr-only'>Email address</label>
          <input onChange={this.props.updateEmailValue} type='email' id='inputEmail' className='form-control' placeholder='Email address' required=''/>
          <label htmlFor='inputPassword' className='sr-only'>Password</label>
          <input onChange={this.props.updatePasswordValue} type='password' id='inputPassword' className='form-control' placeholder='Password' required=''/>
          <button className='btn btn-lg btn-primary btn-block' type='submit' onClick={this.login}>Sign in</button>
          <li><Link to='/register'>REGISTER HERE</Link></li>
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
