import axios from 'axios';

import {
  GET_USER_INFO
} from '../constants/reducer-actions.constant';



export const getUserInfo = () => {
  return function(dispatch) {
    axios.get('/user/me')
      .then((res) => {
        dispatch({
          type: GET_USER_INFO,
          user: res.data.user
        });
      })
      .catch((err) => {
        //bad login error
        console.log(err);
      });
  };
};
