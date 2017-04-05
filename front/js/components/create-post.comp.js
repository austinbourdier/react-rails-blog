/**
 * @fileOverview The Hello World component.
 */

import React from 'react';

export default class CreatePost extends React.Component {
  render() {
    return (
      <div>
        <textarea rows="4" cols="50" placeholder='Type your post here' onChange={this.props.updatePostValue}></textarea>
        <button onClick={this.props.onCreatePostClick}>CREATE POST</button>
      </div>
    );
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log(nextProps, nextState)
  }
}

/** @const {Object} propTypes definition */
CreatePost.propTypes = {
};
