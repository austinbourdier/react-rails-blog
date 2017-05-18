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
        <li><Link to='/login'>LOGIN HERE</Link></li>
        <form onSubmit={this.register}>
          <TextField hintText='Type your email here' onChange={this.props.updateEmailValue} type='email' /><br/>
          <TextField hintText='Type your password here' onChange={this.props.updatePasswordValue} type='password' /><br/>
          <RaisedButton label='Register' onClick={this.register} />
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
