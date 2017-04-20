/**
 * @fileOverview The Posts reducer.
 */

import { handleActions } from 'redux-actions';

import {
  UPDATE_POST_TITLE,
  UPDATE_POST_BODY,
  CREATE_POST
} from '../constants/reducer-actions.constant';

const initialState = {
  title: '',
  body: '',
  creating: false,
  post: {}
};

export default handleActions({
  [UPDATE_POST_TITLE]: (state, action) => {
    return Object.assign({}, state, {
      title: action.title
    });
  },
  [UPDATE_POST_BODY]: (state, action) => {
    return Object.assign({}, state, {
      body: action.body
    });
  },
  [CREATE_POST]: (state, action) => {
    return Object.assign({}, state, {
      creating: action.creating
    });
  }
}, initialState);
