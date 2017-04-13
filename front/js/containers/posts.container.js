/**
 * @fileOverview The Posts container.
 */

import { connect } from 'react-redux';

import Posts from '../components/posts.component';
import { fetchPosts } from '../actions/posts.action';

/**
 * Handle state change and map it to local component props.
 *
 * @param {Object} state The new app state.
 */
function mapStateToProps(state) {
  return {
    posts: state.Posts.posts
  };
}

/**
 * Map dispatch actions to props.
 *
 * @param {Function} dispatch The dispatch func.
 */
function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
