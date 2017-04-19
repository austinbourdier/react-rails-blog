/**
 * @fileOverview The Create Post component.
 */

import React from 'react';
import { Link } from 'react-router';

export default class CreatePost extends React.Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <textarea rows='1' cols='50' placeholder='Type your post title here' onChange={this.props.updatePostTitle}></textarea>
        <textarea rows='4' cols='50' placeholder='Type your post body here' onChange={this.props.updatePostBody}></textarea>
=======
        <li><Link to='/'>HOME PAGE</Link></li>
        <textarea rows='4' cols='50' placeholder='Type your post here' onChange={this.props.updatePostValue}></textarea>
>>>>>>> ccdbf95d0682691e7ec1e59871ab281f86b45c86
        <button disabled={this.props.creating} onClick={this.props.onCreatePostClick}>CREATE POST</button>
      </div>
    );
  }

}

/** @const {Object} propTypes definition */
CreatePost.propTypes = {
  updatePostTitle: React.PropTypes.func,
  updatePostBody: React.PropTypes.func,
  onCreatePostClick: React.PropTypes.func,
  creating: React.PropTypes.bool
};
