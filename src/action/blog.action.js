import axios from '../helper/axios';
import { blogConstant, postConstant } from './constant';

// Get list post
export const FetchBlogPost = (page) => {
  return async (dispatch) => {
    dispatch({
      type: blogConstant.FETCH_BLOG_POST_REQUEST,
    });
    let res = null;
    if (!page) {
      res = await axios.get(`/wp/v2/posts?per_page=9&page=1`);
    } else {
      res = await axios.get(`/wp/v2/posts?per_page=9&page=${page}`);
    }
    if (res.status === 200) {
      dispatch({
        type: blogConstant.FETCH_BLOG_POST_SUCCESS,
        payload: {
          data: res.data,
          headers: res.headers,
        },
      });
    } else {
      dispatch({
        type: blogConstant.FETCH_BLOG_POST_FAILURE,
        payload: {
          error: res.error,
        },
      });
    }
  };
};
//`https://truyenmai.com/wp-json/wp/v2/media/${imageId}`
// Get post contents
export const LoadPostContent = (slug) => {
  return async (dispatch) => {
    dispatch({
      type: postConstant.FETCH_POST_REQUEST,
    });
    const res = await axios.get(`/wp/v2/posts?slug=${slug}`);
    if (res.status === 200) {
      dispatch({
        type: postConstant.FETCH_POST_SUCCESS,
        payload: {
          data: res.data,
        },
      });
    } else {
      dispatch({
        type: postConstant.FETCH_POST_FAILURE,
        payload: {
          error: res.error,
        },
      });
    }
  };
};

// Edit post content
export const EditPostContent = (slug, form) => {
  return async (dispatch) => {
    dispatch({
      type: postConstant.EDIT_POST_REQUEST,
    });
    const res = await axios.post(`/posts/${slug}`, form);
    if (res.status === 200) {
      console.log(res);
      // dispatch({
      //     type: postConstant.EDIT_POST_SUCCESS,
      //     payload: {
      //         data: res.data
      //     }
      // })
    } else {
      dispatch({
        type: postConstant.EDIT_POST_FAILURE,
        payload: {
          error: res.error,
        },
      });
    }
  };
};
