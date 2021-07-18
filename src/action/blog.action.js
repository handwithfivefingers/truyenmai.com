import axios from '../helper/axios';
import { blogConstant, postConstant } from './constant';

// Get list post
export const FetchBlogPost = ({ perpage, page }) => {
  return async (dispatch) => {
    dispatch({
      type: blogConstant.FETCH_BLOG_POST_REQUEST,
    });
    // let res = null;
    // if (!page) {
    //   res = await axios.get(`/wp/v2/posts?per_page=9&page=1`);
    // } else {
    //   res = await axios.get(`/wp/v2/posts?per_page=9&page=${page}`);
    // }
    const res = await axios.get(
      `/wp/v2/posts?per_page=${perpage}&page=${page}&_embed`
    );
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
//Fetch image nè
export const FetchImageBlog = (imgId) => {
  return async (dispatch) => {
    dispatch({
      type: blogConstant.FETCH_BLOG_POST_IMAGE_REQUEST,
    });
    const res = await axios.get(
      `https://truyenmai.com/wp-json/wp/v2/media/${imgId}`
    );
    if (res.status == 200) {
      dispatch({
        type: blogConstant.FETCH_BLOG_POST_IMAGE_SUCCESS,
      });
      return res.data.guid.rendered;
    } else {
      dispatch({
        type: blogConstant.FETCH_BLOG_POST_IMAGE_FAILURE,
      });
      return { message: 'failed' };
    }
  };
};
// Get post contents
export const LoadPostContent = (slug) => {
  return async (dispatch) => {
    dispatch({
      type: postConstant.FETCH_POST_REQUEST,
    });
    const res = await axios.get(`/wp/v2/posts?slug=${slug}&_embed`);
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

export const SearchBlogPost = (params) => {
  return async (dispatch) => {
    dispatch({
      type: blogConstant.SEARCH_BLOG_REQUEST,
    });
    //truyenmai.com/wp-json/wp/v2/posts?search=css&_embed
    const res = await axios.get(`/wp/v2/posts?search=${params}&_embed`);
    console.log(res);
    if (res.status === 200) {
      dispatch({
        type: blogConstant.SEARCH_BLOG_SUCCESS,
        payload: {
          search: res.data,
        },
      });
    } else {
      dispatch({
        type: blogConstant.SEARCH_BLOG_FAILURE,
        payload: {
          error: res.data,
        },
      });
    }
  };
};
