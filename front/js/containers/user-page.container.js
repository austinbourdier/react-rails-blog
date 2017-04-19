/**
 * @fileOverview The Create Post container.
 */

import { connect } from 'react-redux';

import UserPage from '../components/user-page.component';
import { fetchUserPage } from '../actions/user-page.action';
import store from '../store';

/**
 * Handle state change and map it to local component props.
 *
 * @param {Object} state The new app state.
 */
function mapStateToProps(state) {
  return {
    user: state.UserPage.user
  };
}

/**
 * Map dispatch actions to props.
 *
 * @param {Function} dispatch The dispatch func.
 */
function mapDispatchToProps(dispatch) {
  return {
    fetchUserPage: (userId) => {
      dispatch(fetchUserPage(userId));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
