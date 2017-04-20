/**
 * @fileOverview Register related actions.
 */

import axios from 'axios';

import {
  UPDATE_EMAIL_VALUE_REGISTER,
  UPDATE_PASSWORD_VALUE_REGISTER
} from '../constants/reducer-actions.constant';

/**
 * Register, and update values on the input fields.
 *
 * @return {Function} The action handler.
 */
export const register = (email, password) => {
  return function(dispatch) {
    axios.post('/auth/register', {email: email, password: password})
      .then(() => {
        window.location = '/';
      })
      .catch((err) => {
        //bad registration error
        alert(err.response.data.err);
      });
  };
};

export const updateEmailValue = (email) => {
  return function(dispatch) {
    dispatch({
      type: UPDATE_EMAIL_VALUE_REGISTER,
      email: email
    });
  };
};
export const updatePasswordValue = (password) => {
  return function(dispatch) {
    dispatch({
      type: UPDATE_PASSWORD_VALUE_REGISTER,
      password: password
    });
  };
};

