/**
 * @fileOverview The Hello World component.
 */

import React from 'react';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        {this.props.posts &&
          this.props.posts.map((post, i)=> {
            return <p key={i}>{post.id}</p>;
          })
        }
      </div>
    );
  }

  componentDidMount() {
    this.props.onFetchPosts();
  }
}

/** @const {Object} propTypes definition */
HelloWorld.propTypes = {
  serverTimestamp: React.PropTypes.number,
  posts: React.PropTypes.array,
  onFetchServerTimestamp: React.PropTypes.func.isRequired,
  onFetchPosts: React.PropTypes.func.isRequired,
};
