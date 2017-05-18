/**
 * @fileOverview The Posts reducer.
 */

import { handleActions } from 'redux-actions';

import {
  FETCH_IMAGE_SUCCESS, UPDATE_ANSWER_TEXT, SUBMIT_ANSWER_SUCCESS, SUBMITTING_ANSWER
} from '../constants/reducer-actions.constant';

const initialState = {
  attempt: {},
  image: {},
  answerText: '',
  submitting: true
};

export default handleActions({
  [FETCH_IMAGE_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      images: action.images
    });
  },
  [UPDATE_ANSWER_TEXT]: (state, action) => {
    return Object.assign({}, state, {
      answerText: action.answerText
    });
  },
  [SUBMIT_ANSWER_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      attempt: action.attempt
    });
  },
  [SUBMITTING_ANSWER]: (state, action) => {
    return Object.assign({}, state, {
      submitting: action.submitting
    });
  }

}, initialState);
