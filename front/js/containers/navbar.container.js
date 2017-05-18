/**
 * @fileOverview The Navbar container.
 */

import { connect } from 'react-redux';

import Navbar from '../components/navbar.component';
import { logout } from '../actions/logout.action';
import { getUserInfo } from '../actions/navbar.action';

/**
 * Handle state change and map it to local component props.
 *
 * @param {Object} state The new app state.
 */
function mapStateToProps(state) {
  return {
    user: state.Navbar.user
  };
}

/**
 * Map dispatch actions to props.
 *
 * @param {Function} dispatch The dispatch func.
 */
function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logout());
    },
    getUserInfo: () => {
      dispatch(getUserInfo());
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
