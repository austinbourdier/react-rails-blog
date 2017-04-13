/**
 * @fileOverview The Hello World container.
 */

import { connect } from 'react-redux';

import Login from '../components/login.component';
import { updateUsernameValue, updatePasswordValue, login } from '../actions/login.action';
import store from '../store';

/**
 * Handle state change and map it to local component props.
 *
 * @param {Object} state The new app state.
 */
function mapStateToProps(state) {
  return {
    username: state.Login.username,
    password: state.Login.password
  };
}

/**
 * Map dispatch actions to props.
 *
 * @param {Function} dispatch The dispatch func.
 */
function mapDispatchToProps(dispatch) {
  return {
    updateUsernameValue: (event) => {
      dispatch(updateUsernameValue(event.target.value));
    },
    updatePasswordValue: (event) => {
      dispatch(updatePasswordValue(event.target.value));
    },
    login: () => {
      const credentials = store.getState().Login;
      dispatch(login(credentials.username, credentials.password));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
