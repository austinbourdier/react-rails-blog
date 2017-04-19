/**
 * @fileOverview The Create Post component.
 */

import React from 'react';

export default class CreatePost extends React.Component {
  render() {
    return (
      <div>
        <textarea rows='1' cols='50' placeholder='Type your post title here' onChange={this.props.updatePostTitle}></textarea>
        <textarea rows='4' cols='50' placeholder='Type your post body here' onChange={this.props.updatePostBody}></textarea>
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
