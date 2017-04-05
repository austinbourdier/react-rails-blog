/**
 * @fileOverview The Posts reducer.
 */

import { handleActions } from 'redux-actions';

import {
  FETCH_POSTS_SUCCESS
} from '../constants/reducer-actions.const';

const initialState = {
  posts: []
};

export default handleActions({
  [FETCH_POSTS_SUCCESS]: (state, action) => {
    console.log(state)
    state.posts = action.posts;
    console.log(state)
    return state;
  }
}, initialState);
