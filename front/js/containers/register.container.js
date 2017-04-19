/**
 * @fileOverview The Register container.
 */

import { connect } from 'react-redux';

import Register from '../components/register.component';
import { updateEmailValue, updatePasswordValue, register } from '../actions/register.action';
import store from '../store';

/**
 * Handle state change and map it to local component props.
 *
 * @param {Object} state The new app state.
 */
function mapStateToProps(state) {
  return {
    email: state.Register.email,
    password: state.Register.password
  };
}

/**
 * Map dispatch actions to props.
 *
 * @param {Function} dispatch The dispatch func.
 */
function mapDispatchToProps(dispatch) {
  return {
    updateEmailValue: (event) => {
      dispatch(updateEmailValue(event.target.value));
    },
    updatePasswordValue: (event) => {
      dispatch(updatePasswordValue(event.target.value));
    },
    register: () => {
      const credentials = store.getState().Register;
      dispatch(register(credentials.email, credentials.password));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
