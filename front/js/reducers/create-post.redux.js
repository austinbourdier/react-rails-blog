/**
 * @fileOverview The Posts reducer.
 */

import { handleActions } from 'redux-actions';

import {
  UPDATE_POST_VALUE
} from '../constants/reducer-actions.const';

const initialState = {
  value: '',
  postCreated: {}
};

export default handleActions({
  [UPDATE_POST_VALUE]: (state, action) => {
    return Object.assign({}, state, {
      value: action.value
    });
  }
}, initialState);
