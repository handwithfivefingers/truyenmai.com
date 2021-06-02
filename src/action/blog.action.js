
import axios from '../helper/axios';
import { blogConstant } from './constant';

export const FetchBlogPost = () => {
    return async (dispatch) => {
        console.log(dispatch)
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