/**
 * @fileOverview The Login component.
 */

import React from 'react';
import { Link } from 'react-router';

export default class Register extends React.Component {
  render() {
    return (
      <div>
        <input placeholder='Type your username here' onChange={this.props.updateUsernameValue}></input>
        <input placeholder='Type your password here' onChange={this.props.updatePasswordValue}></input>
        <button onClick={this.props.register}>Register</button>
      </div>
    );
  }

}

/** @const {Object} propTypes definition */
Register.propTypes = {
  updateUsernameValue: React.PropTypes.func,
  updatePasswordValue: React.PropTypes.func,
  register: React.PropTypes.func
};
