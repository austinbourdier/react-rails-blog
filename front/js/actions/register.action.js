/**
 * @fileOverview Register related actions.
 */

import axios from 'axios';

import {
  UPDATE_USERNAME_VALUE_REGISTER,
  UPDATE_PASSWORD_VALUE_REGISTER
} from '../constants/reducer-actions.constant';

/**
 * Register, and update values on the input fields.
 *
 * @return {Function} The action handler.
 */
export const register = (username, password) => {
  return function(dispatch) {
    axios.post('/auth/register', {username: username, password: password})
      .then(() => {
        window.location = '/';
      })
      .catch((err) => {
        //bad registration error
        alert(err.response.data.err);
      });
  };
};

export const updateUsernameValue = (username) => {
  return function(dispatch) {
    dispatch({
      type: UPDATE_USERNAME_VALUE_REGISTER,
      username: username
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

