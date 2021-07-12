import Axios from './../helper/adminAxios';
import { ActConstant } from './constant';
export const ADM_Fetch_Post = () => {
  return async (dispatch) => {
    dispatch({
      type: ActConstant.AD_FETCH_POST_REQUEST,
    });
    const res = await Axios.get(`/post`);
    if (res.status === 200) {
      dispatch({
        type: ActConstant.AD_FETCH_POST_SUCCESS,
        payload: res.data.post,
      });
    } else {
      dispatch({
        type: ActConstant.AD_FETCH_POST_FAILURE,
        payload: {
          message: ' fail to get post',
        },
      });
    }
  };
};
export const ADM_Fetch_Single_Post = (slug) => {
  return async (dispatch) => {
    // dispatch({
    //   type: ActConstant.FETCH_POST_REQUEST,
    // });
    const res = await Axios.get(`/post/${slug}`);
    if (res.status === 200) {
    //   // dispatch({
    //   //   type: ActConstant.FETCH_POST_SUCCESS,
    //   //   payload: res.data.post,
    //   // });
      // res.then((response) => {
        return res.data.post
        // return response
      // });
    } else {
    //   // dispatch({
    //   //   type: ActConstant.FETCH_POST_FAILURE,
    //   //   payload: {
    //   //     message: ' fail to get post',
    //   //   },
    //   // });
    }
  };
};
