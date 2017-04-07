/**
 * @fileOverview The Posts Details reducer.
 */

import { handleActions } from 'redux-actions';

import {
  FETCH_POST_DETAILS_SUCCESS
} from '../constants/reducer-actions.const';

const initialState = {
  post: {}
};

export default handleActions({
  [FETCH_POST_DETAILS_SUCCESS]: (state, action) => {
    return {
      ...state,
      post: action.post
    }
  }
}, initialState);
