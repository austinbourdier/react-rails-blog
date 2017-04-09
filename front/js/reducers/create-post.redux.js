/**
 * @fileOverview The Posts reducer.
 */

import { handleActions } from 'redux-actions';

import {
  UPDATE_POST_VALUE,
  CREATE_POST
} from '../constants/reducer-actions.const';

const initialState = {
  value: '',
  creating: false,
  postCreated: {}
};

export default handleActions({
  [UPDATE_POST_VALUE]: (state, action) => {
    return Object.assign({}, state, {
      value: action.value
    });
  },
  [CREATE_POST]: (state, action) => {
    console.log(action)
    return Object.assign({}, state, {
      creating: action.creating
    });
  }
}, initialState);
