/**
 * @fileOverview Posts related actions.
 */

import axios from 'axios';

import {
  CREATE_POST_SUCCESS,
  UPDATE_POST_VALUE
} from '../constants/reducer-actions.const';

/**
 * Fetch posts.
 *
 * @return {Function} The action handler.
 */
export const createPost = (value) => {
  return function(dispatch) {
    // this could probably be updated to /posts (add a rails posts_controller.rb)
    axios.post('/post/create', {value: value})
      .then((res) => {
        window.location = '/post/' + res.data.postCreated.id;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updatePostValue = (value) => {
  return function(dispatch) {
    dispatch({
      type: UPDATE_POST_VALUE,
      value: value
    });
  };
};
