/**
 * @fileOverview The Posts reducer.
 */

import { handleActions } from 'redux-actions';

import {
  FETCH_POSTS_SUCCESS
} from '../constants/reducer-actions.constant';

const initialState = {
  posts: []
};

export default handleActions({
  [FETCH_POSTS_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      posts: action.posts
    });
  }
}, initialState);
