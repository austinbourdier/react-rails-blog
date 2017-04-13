/**
 * @fileOverview The Posts reducer.
 */

import { handleActions } from 'redux-actions';

import {
  UPDATE_USERNAME_VALUE_REGISTER,
  UPDATE_PASSWORD_VALUE_REGISTER
} from '../constants/reducer-actions.constant';

const initialState = {
  username: '',
  password: ''
};

export default handleActions({
  [UPDATE_USERNAME_VALUE_REGISTER]: (state, action) => {
    return Object.assign({}, state, {
      username: action.username
    });
  },
  [UPDATE_PASSWORD_VALUE_REGISTER]: (state, action) => {
    return Object.assign({}, state, {
      password: action.password
    });
  }
}, initialState);
