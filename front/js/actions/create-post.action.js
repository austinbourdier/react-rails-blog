/**
 * @fileOverview Posts related actions.
 */

import axios from 'axios';

import {
  UPDATE_POST_TITLE,
  UPDATE_POST_BODY,
  CREATE_POST
} from '../constants/reducer-actions.constant';

/**
 * Create posts.
 *
 * @return {Function} The action handler.
 */
export const createPost = (title, body) => {
  return function(dispatch) {
    // this could probably be updated to /posts (add a rails posts_controller.rb)
    dispatch({
      type: CREATE_POST,
      creating: true
    });
    axios.post('/post/create', {title: title, body: body})
      .then((res) => {
        window.location = '/post/' + res.data.post.id;
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updatePostTitle = (title) => {
  return function(dispatch) {
    dispatch({
      type: UPDATE_POST_TITLE,
      title: title
    });
  };
};
export const updatePostBody = (body) => {
  return function(dispatch) {
    dispatch({
      type: UPDATE_POST_BODY,
      body: body
    });
  };
};
