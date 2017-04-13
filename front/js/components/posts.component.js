/**
 * @fileOverview The Posts component.
 */

import React from 'react';
import { Link } from 'react-router';

export default class Posts extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.logout}>Logout</button>
        <li><Link to='/create'>CREATE POST HERE</Link></li>
        {this.props.posts &&
          this.props.posts.map((post, i)=> {
            return <Link to={{ pathname: '/post/' + post.id }} key={i}><p>id: {post.id}, text: {post.text}</p></Link>;
          })
        }
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

}

/** @const {Object} propTypes definition */
Posts.propTypes = {
  posts: React.PropTypes.array,
  fetchPosts: React.PropTypes.func,
  logout: React.PropTypes.func
};
