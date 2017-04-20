/**
 * @fileOverview The Create Post container.
 */

import { connect } from 'react-redux';

import CreatePost from '../components/create-post.component';
import { createPost, updatePostTitle, updatePostBody } from '../actions/create-post.action';
import store from '../store';

/**
 * Handle state change and map it to local component props.
 *
 * @param {Object} state The new app state.
 */
function mapStateToProps(state) {
  return {
    creating: state.CreatePost.creating
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
      dispatch(createPost(store.getState().CreatePost.title, store.getState().CreatePost.body));
    },
    updatePostTitle: (event) => {
      dispatch(updatePostTitle(event.target.value));
    },
    updatePostBody: (event) => {
      dispatch(updatePostBody(event.target.value));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
