/**
 * @fileOverview The Posts reducer.
 */

import { handleActions } from 'redux-actions';

import {
  UPDATE_EMAIL_VALUE_LOGIN,
  UPDATE_PASSWORD_VALUE_LOGIN
} from '../constants/reducer-actions.constant';

const initialState = {
  email: '',
  password: ''
};

export default handleActions({
  [UPDATE_EMAIL_VALUE_LOGIN]: (state, action) => {
    return Object.assign({}, state, {
      email: action.email
    });
  },
  [UPDATE_PASSWORD_VALUE_LOGIN]: (state, action) => {
    return Object.assign({}, state, {
      password: action.password
    });
  }
}, initialState);
