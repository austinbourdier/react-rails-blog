/**
 * @fileOverview The Hello World container.
 */

import { connect } from 'react-redux';

import PostDetails from '../components/post-details.comp';
import { fetchPost } from '../actions/post-details.action';

/**
 * Handle state change and map it to local component props.
 *
 * @param {Object} state The new app state.
 */
function mapStateToProps(state) {
  return {
    post: state.PostDetails.post
  };
}

/**
 * Map dispatch actions to props.
 *
 * @param {Function} dispatch The dispatch func.
 */
function mapDispatchToProps(dispatch) {
  return {
    fetchPost: (id) => {
      dispatch(fetchPost(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
