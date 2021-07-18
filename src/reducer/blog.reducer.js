import { blogConstant, postConstant } from '../action/constant';

const initState = {
  data: null,
  edit: {
    data: null,
  },
  loading: false,
  error: '',
  post: [],
  totalpage: '',
  totalpost: '',
  search: [],
};

export default (state = initState, action) => {
  switch (action.type) {
    // FETCH POST
    case blogConstant.FETCH_BLOG_POST_REQUEST:
      state = {
        ...state,
        loading: true,
        data: null,
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

    // FETCH SINGLE POST
    case postConstant.FETCH_POST_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case postConstant.FETCH_POST_SUCCESS:
      console.log(action.payload);
      return (state = {
        ...state,
        loading: false,
        post: action.payload.data,
      });
    case postConstant.FETCH_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        post: [],
        error: action.payload,
      };
      break;
    //SEARCHING
    case blogConstant.SEARCH_BLOG_REQUEST:
      state = {
        ...state,
        loading: true,
        search: null,
      };
      break;
    case blogConstant.SEARCH_BLOG_SUCCESS:
      console.log(action.payload);
      const { search } = action.payload;
      state = {
        ...state,
        loading: true,
        search,
      };
      break;
    case blogConstant.SEARCH_BLOG_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;
  }
  return state;
};
