
import axios from '../helper/axios';
import { blogConstant, postConstant } from './constant';

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