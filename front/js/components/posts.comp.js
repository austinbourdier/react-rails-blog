/**
 * @fileOverview The Hello World component.
 */

import React from 'react';
import { Link } from 'react-router';

export default class Posts extends React.Component {
  render() {
    return (
      <div>
        <li><Link to="/create">CREATE POST HERE</Link></li>
        {this.props.posts &&
          this.props.posts.map((post, i)=> {
            return <p key={i}>id: {post.id}, text: {post.text}</p>;
          })
        }
        <button onClick={this.props.onCreatePostClick}>CREATE POST</button>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchPosts();
  }
}

/** @const {Object} propTypes definition */
Posts.propTypes = {
  posts: React.PropTypes.array
};
