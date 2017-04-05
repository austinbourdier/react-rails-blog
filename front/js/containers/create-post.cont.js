/**
 * @fileOverview The Hello World container.
 */

import { connect } from 'react-redux';

import CreatePost from '../components/create-post.comp';
import { fetchPosts } from '../actions/posts.action';
import { createPost, updatePostValue } from '../actions/create-post.action';
import store from '../store';

/**
 * Handle state change and map it to local component props.
 *
 * @param {Object} state The new app state.
 */
function mapStateToProps(state) {
  return {

  };
}

/**
 * Map dispatch actions to props.
 *
 * @param {Function} dispatch The dispatch func.
 */
function mapDispatchToProps(dispatch) {
  return {
    onCreatePostClick: () => {
      console.log(store.getState().App.createPost.value)
      dispatch(createPost(store.getState().App.createPost.value));
    },
    updatePostValue: (event) => {
      dispatch(updatePostValue(event.target.value));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
