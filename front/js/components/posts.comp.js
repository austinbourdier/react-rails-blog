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
            return <Link to={{ pathname: "/post/" + post.id }} key={i}><p>id: {post.id}, text: {post.text}</p></Link>;
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
  fetchPosts: React.PropTypes.func
};
