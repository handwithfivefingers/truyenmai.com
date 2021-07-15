import Axios from './../helper/adminAxios';
import { ActConstant, ActCategories } from './constant';
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
      return res.data.post;
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
export const add_category = (data) => {
  return async (dispatch) => {
    dispatch({
      type: ActCategories.AD_ADD_CATEGORY_REQUEST,
    });
    const res = await Axios.post('/category/create', data);
    if (res.status === 200) {
      dispatch({
        type: ActCategories.AD_ADD_CATEGORY_SUCCESS,
        payload: {},
      });
    } else {
      dispatch({
        type: ActCategories.AD_FETCH_CATEGORY_FAILURE,
        message: 'Cant add new category. Pls try again !',
      });
    }
  };
};
export const fetch_categories = () => {
  return async (dispatch) => {
    dispatch({
      type: ActCategories.AD_FETCH_CATEGORY_REQUEST,
    });
    const res = await Axios.get('/category/');
    if (res.status === 200) {
      const { categoryList } = res.data;
      dispatch({
        type: ActCategories.AD_FETCH_CATEGORY_SUCCESS,
        payload: {
          category: categoryList,
        },
      });
    } else {
      dispatch({
        type: ActCategories.AD_FETCH_CATEGORY_FAILURE,
        payload: {
          message: 'Load category failure',
        },
      });
    }
  };
};
