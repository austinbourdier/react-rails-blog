/**
 * @fileOverview The Hello World container.
 */

import { connect } from 'react-redux';

import Login from '../components/login.component';
<<<<<<< HEAD
import { updateEmailValue, updatePasswordValue, login } from '../actions/login.action';
=======
import { updateUsernameValue, updatePasswordValue, login } from '../actions/login.action';
>>>>>>> ccdbf95d0682691e7ec1e59871ab281f86b45c86
import store from '../store';

/**
 * Handle state change and map it to local component props.
 *
 * @param {Object} state The new app state.
 */
function mapStateToProps(state) {
  return {
<<<<<<< HEAD
    email: state.Login.email,
=======
    username: state.Login.username,
>>>>>>> ccdbf95d0682691e7ec1e59871ab281f86b45c86
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
<<<<<<< HEAD
    updateEmailValue: (event) => {
      dispatch(updateEmailValue(event.target.value));
=======
    updateUsernameValue: (event) => {
      dispatch(updateUsernameValue(event.target.value));
>>>>>>> ccdbf95d0682691e7ec1e59871ab281f86b45c86
    },
    updatePasswordValue: (event) => {
      dispatch(updatePasswordValue(event.target.value));
    },
    login: () => {
      const credentials = store.getState().Login;
<<<<<<< HEAD
      dispatch(login(credentials.email, credentials.password));
=======
      dispatch(login(credentials.username, credentials.password));
>>>>>>> ccdbf95d0682691e7ec1e59871ab281f86b45c86
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
