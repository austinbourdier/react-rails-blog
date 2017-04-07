/**
 * @fileOverview The Hello World component.
 */

import React from 'react';
import { Link } from 'react-router';

export default class CreatePost extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  componentDidUpdate(a, b) {
    console.log(a, b)
  }

  render() {
    return (
      <div>
        <li><Link to="/">HOME PAGE</Link></li>
        <textarea rows="4" cols="50" placeholder='Type your post here' onChange={this.props.updatePostValue}></textarea>
        <button onClick={this.props.onCreatePostClick}>CREATE POST</button>
      </div>
    );
  }

}

/** @const {Object} propTypes definition */
CreatePost.propTypes = {
  updatePostValue: React.PropTypes.func,
  onCreatePostClick: React.PropTypes.func
};
