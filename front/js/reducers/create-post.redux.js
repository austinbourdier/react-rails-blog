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
    return {
      ...state,
      value: action.value
    }
  },
  // [CREATE_POST_SUCCESS]: (state, action) => {
  //   return {
  //     ...state,
  //     postCreated: action.postCreated
  //   }
  // },
}, initialState);
