import Axios from './../helper/adminAxios';
import { Authenticate } from './constant';

export const ATLogin = (user) => {
  return async (dispatch) => {
    dispatch({
      type: Authenticate.LOGIN_REQUEST,
    });
    const res = await Axios.post(`${process.env.REACT_APP_API}/signin/`, user);
    if (res.status === 200) {
      window.localStorage.setItem('token', res.data.token);
      console.log(res.data.user);
      window.localStorage.setItem('user', JSON.stringify(res.data.user));
      dispatch({
        type: Authenticate.LOGIN_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: Authenticate.LOGIN_FAILURE,
        message: 'Something went wrong',
      });
    }
  };
};

export const IsUserLogin = () => {
  return async (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch({
        type: Authenticate.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: Authenticate.LOGIN_FAILURE,
        payload: {
          message: 'User needs to login',
        },
      });
    }
  };
};
