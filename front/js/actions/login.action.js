/**
 * @fileOverview Login related actions.
 */

import axios from 'axios';

import {
  UPDATE_EMAIL_VALUE_LOGIN,
  UPDATE_PASSWORD_VALUE_LOGIN
} from '../constants/reducer-actions.constant';

/**
 * Login, and update values on the input fields.
 *
 * @return {Function} The action handler.
 */
export const login = (email, password) => {
  return function(dispatch) {
    axios.get('/auth/login', { params: {email: email, password: password} })
      .then(() => {
        window.location = '/';
      })
      .catch((err) => {
        //bad login error
        console.log(err);
        alert('bad login');
      });
  };
};

export const updateEmailValue = (email) => {
  return function(dispatch) {
    dispatch({
      type: UPDATE_EMAIL_VALUE_LOGIN,
      email: email
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
