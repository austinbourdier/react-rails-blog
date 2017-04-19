/**
 * @fileOverview The Posts reducer.
 */

import { handleActions } from 'redux-actions';

import {
  UPDATE_EMAIL_VALUE_REGISTER,
  UPDATE_PASSWORD_VALUE_REGISTER
} from '../constants/reducer-actions.constant';

const initialState = {
  email: '',
  password: ''
};

export default handleActions({
  [UPDATE_EMAIL_VALUE_REGISTER]: (state, action) => {
    return Object.assign({}, state, {
      email: action.email
    });
  },
  [UPDATE_PASSWORD_VALUE_REGISTER]: (state, action) => {
    return Object.assign({}, state, {
      password: action.password
    });
  }
}, initialState);
