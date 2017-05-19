/**
 * @fileOverview The Login component.
 */

import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
  }

  register(e) {
    e.preventDefault();
    this.props.register();
  }
  render() {
    return (
      <div>
        <form className='form-signin' onSubmit={this.register}>
          <h2 className='form-signin-heading'>Please register</h2>
          <label htmlFor='inputEmail' className='sr-only'>Email address</label>
          <input autoComplete='off' onChange={this.props.updateEmailValue} type='email' id='inputEmail' className='form-control' placeholder='Email address' required=''/>
          <label htmlFor='inputPassword' className='sr-only'>Password</label>
          <input autoComplete='off' onChange={this.props.updatePasswordValue} type='password' id='inputPassword' className='form-control' placeholder='Password' required=''/>
          <button className='btn btn-lg btn-primary btn-block' type='submit' onClick={this.register}>Sign in</button>
          <li><Link to='/login'>LOGIN HERE</Link></li>
        </form>
      </div>
    );
  }

}

/** @const {Object} propTypes definition */
Register.propTypes = {
  updateEmailValue: React.PropTypes.func,
  updatePasswordValue: React.PropTypes.func,
  register: React.PropTypes.func
};
