/**
 * @fileOverview Login related actions.
 */

import axios from 'axios';

import {
  UPDATE_USERNAME_VALUE_LOGIN,
  UPDATE_PASSWORD_VALUE_LOGIN
} from '../constants/reducer-actions.constant';

/**
 * Login, and update values on the input fields.
 *
 * @return {Function} The action handler.
 */
export const login = (username, password) => {
  return function(dispatch) {
    axios.get('/auth/login', { params: {username: username, password: password} })
      .then(() => {
        // need to deal with session creation and local storage creation
        // const user = res.data.user;
      })
      .catch((err) => {
        //bad login error
        console.log(err);
      });
  };
};

export const updateUsernameValue = (username) => {
  return function(dispatch) {
    dispatch({
      type: UPDATE_USERNAME_VALUE_LOGIN,
      username: username
    });
  };
};
export const updatePasswordValue = (password) => {
  return function(dispatch) {
    dispatch({
      type: UPDATE_PASSWORD_VALUE_LOGIN,
      password: password
    });
  };
};
