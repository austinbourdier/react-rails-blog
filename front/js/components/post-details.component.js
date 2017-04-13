/**
 * @fileOverview The Hello World component.
 */

import React from 'react';
import { Link } from 'react-router';

export default class PostDetails extends React.Component {
  render() {
    const post = this.props.post;
    return (
      <div>
        <li><Link to="/">HOME PAGE</Link></li>
        Post {post.id}: {post.text}
      </div>
    );
  }
  componentDidMount() {
    this.props.fetchPost(this.props.params.id);
  }
}

/** @const {Object} propTypes definition */
PostDetails.propTypes = {
  post: React.PropTypes.object,
  fetchPost: React.PropTypes.func,
  params: React.PropTypes.object
};
