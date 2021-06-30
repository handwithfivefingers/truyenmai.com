import { blogConstant, postConstant } from '../action/constant';

const initState = {
  data: null,
  edit: {
    data: null,
  },
  loading: false,
  error: '',
  post: {},
  totalpage: '',
  totalpost: '',
};

export default (state = initState, action) => {
  switch (action.type) {
    case blogConstant.FETCH_BLOG_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case blogConstant.FETCH_BLOG_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        data: action.payload.data,
        totalpage: action.payload.headers['x-wp-totalpages'],
        totalpost: action.payload.headers['x-wp-total'],
      };
      break;
    case blogConstant.FETCH_BLOG_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload,
      };
      break;
    case postConstant.FETCH_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case postConstant.FETCH_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        post: action.payload.data,
      };
      break;
    case postConstant.FETCH_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        post: {},
        error: action.payload,
      };
      break;
    default:
      state = {
        ...state,
      };
      break;
  }
  return state;
};