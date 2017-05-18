/**
 * @fileOverview The Posts reducer.
 */

import { handleActions } from 'redux-actions';

import {
  GET_USER_INFO
} from '../constants/reducer-actions.constant';

const initialState = {
  user: {email: ''}
};

export default handleActions({
  [GET_USER_INFO]: (state, action) => {
    return Object.assign({}, state, {
      user: action.user
    });
  }
}, initialState);
