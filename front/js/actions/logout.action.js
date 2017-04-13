import axios from 'axios';

import {

} from '../constants/reducer-actions.constant';



export const logout = () => {
  return function(dispatch) {
    axios.get('/auth/logout')
      .then(() => {
        window.location = '/login';
      })
      .catch((err) => {
        //bad login error
        console.log(err);
      });
  };
};
