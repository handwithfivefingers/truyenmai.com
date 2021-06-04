
import axios from '../helper/axios';
import { blogConstant, postConstant } from './constant';

// Get list post
export const FetchBlogPost = () => {
    return async (dispatch) => {
        dispatch({
            type: blogConstant.FETCH_BLOG_POST_REQUEST,
        })
        const res = await axios.get('/posts');
        if (res.status === 200) {
            dispatch({
                type: blogConstant.FETCH_BLOG_POST_SUCCESS,
                payload: {
                    data: res.data
                }
            })
        } else {
            dispatch({
                type: blogConstant.FETCH_BLOG_POST_FAILURE,
                payload: {
                    error: res.error
                }
            })
        }
    };
}

// Get post contents
export const LoadPostContent = () => {
    return async (dispatch) => {
        dispatch({
            type: postConstant.FETCH_POST_REQUEST,
        })
        const res = await axios.get('/posts/');
        if (res.status === 200) {
            dispatch({
                type: postConstant.FETCH_POST_SUCCESS,
                payload: {
                    data: res.data
                }
            })
        } else {
            dispatch({
                type: postConstant.FETCH_POST_FAILURE,
                payload: {
                    error: res.error
                }
            })
        }
    };
}

// Edit post content 
export const EditPostContent = (slug, form) => {
    return async (dispatch) => {
        dispatch({
            type: postConstant.EDIT_POST_REQUEST,
        })
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
                    error: res.error
                }
            })
        }
    };
}