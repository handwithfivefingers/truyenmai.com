import { ActConstant } from '../action/constant';

const iniState = {
  pages: [],
  posts: [],
  categories: [],
  loading: false,
  message: '',
};

export default (state = iniState, action) => {
  switch (action.type) {
    case ActConstant.AD_FETCH_POST_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case ActConstant.AD_FETCH_POST_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        posts: action.payload,
      });
    case ActConstant.AD_FETCH_POST_FAILURE:
      return (state = {
        ...state,
        loading: false,
        message: action.payload,
      });
    default:
      return (state = {
        ...state,
      });
  }
};
