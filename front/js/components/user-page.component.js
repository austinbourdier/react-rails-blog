/**
 * @fileOverview The Create Post component.
 */

import React from 'react';
import { Link } from 'react-router';

export default class UserPage extends React.Component {
  render() {
    return (
      <div>
        USER PAGE of {this.props.user.email}
        {this.props.user.posts &&
          this.props.user.posts.map((post, i)=> {
            return (
              <Link to={{ pathname: '/post/' + post.id }} key={i}>
                <p>id: {post.id}, title: {post.title}</p>
                <p>body: {post.body}</p>
              </Link>
            );
          }
        )
      }
      </div>
    );
  }
  componentDidMount() {
    const userId = window.location.pathname.split('/')[2];
    this.props.fetchUserPage(userId);
  }
}

/** @const {Object} propTypes definition */
UserPage.propTypes = {
  user: React.PropTypes.object,
  fetchUserPage: React.PropTypes.func
};
