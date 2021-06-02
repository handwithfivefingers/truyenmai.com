import { blogConstant } from '../action/constant';

const initState = {
    data: null,
    loading: false,
    error: '',
}

export default (state = initState, action) => {
    switch (action.type) {
        case blogConstant.FETCH_BLOG_POST_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case blogConstant.FETCH_BLOG_POST_SUCCESS:
            console.log(action.payload)
            state = {
                ...state,
                loading: false,
                data: action.payload.data
            }
            break;
        case blogConstant.FETCH_BLOG_POST_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload
            }
            break;

        default:
            state = {
                ...state
            }
            break;
    }
    return state;
}