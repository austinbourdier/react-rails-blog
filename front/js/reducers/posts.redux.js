/**
 * @fileOverview The Posts reducer.
 */

import { handleActions } from 'redux-actions';

import {
  FETCH_POSTS_SUCCESS,
} from '../constants/reducer-actions.const';

const initialState = null;

export default handleActions({
  [FETCH_POSTS_SUCCESS]: (state, action) => {
    return action.posts;
  },
}, initialState);
