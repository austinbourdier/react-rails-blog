/**
 * @fileOverview The Login component.
 */

import React from 'react';
import { Link } from 'react-router';

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
          <input placeholder='Type your username here' onChange={this.props.updateEmailValue}></input>
          <input type='password' placeholder='Type your password here' onChange={this.props.updatePasswordValue}></input>
          <button onClick={this.register}>Register</button>
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
