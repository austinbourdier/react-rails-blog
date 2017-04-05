/**
 * @fileOverview The Posts reducer.
 */

import { handleActions } from 'redux-actions';

import {
  UPDATE_POST_VALUE,
  CREATE_POST_SUCCESS,
} from '../constants/reducer-actions.const';

const initialState = {
  value: '',
  postCreated: {}
};

export default handleActions({
  [UPDATE_POST_VALUE]: (state, action) => {
    state.value = action.value;
    return state;
  },
  [CREATE_POST_SUCCESS]: (state, action) => {
    state.postCreated = action.postCreated;
    return state;
  },
}, initialState);
