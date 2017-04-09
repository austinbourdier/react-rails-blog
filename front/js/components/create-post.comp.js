/**
 * @fileOverview The Hello World component.
 */

import React from 'react';
import { Link } from 'react-router';

export default class CreatePost extends React.Component {
  componentDidUpdate(newProps, newState) {
    console.log(newState)
  }
  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <div>
        <li><Link to="/">HOME PAGE</Link></li>
        <textarea rows="4" cols="50" placeholder='Type your post here' onChange={this.props.updatePostValue}></textarea>
        <button disabled={this.props.creating} onClick={this.props.onCreatePostClick}>CREATE POST</button>
      </div>
    );
  }

}

/** @const {Object} propTypes definition */
CreatePost.propTypes = {
  updatePostValue: React.PropTypes.func,
  onCreatePostClick: React.PropTypes.func,
  creating: React.PropTypes.bool
};
