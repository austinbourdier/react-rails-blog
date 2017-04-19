/**
 * @fileOverview The Posts reducer.
 */

import { handleActions } from 'redux-actions';

import {
  FETCH_USER_PAGE_SUCCESS
} from '../constants/reducer-actions.constant';

const initialState = {
  user: {}
};

export default handleActions({
  [FETCH_USER_PAGE_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      user: action.user
    });
  }
}, initialState);
