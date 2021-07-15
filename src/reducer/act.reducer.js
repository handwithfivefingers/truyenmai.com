import { ActConstant, ActCategories } from '../action/constant';

const iniState = {
  pages: [],
  posts: [],
  category: [],
  loading: false,
  message: '',
};

export default (state = iniState, action) => {
  switch (action.type) {
    // FETCH POST
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
    // ADD Category
    case ActCategories.AD_ADD_CATEGORY_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case ActCategories.AD_ADD_CATEGORY_SUCCESS:
      console.log(action.payload);
      return (state = {
        ...state,
        loading: false,
      });
    case ActCategories.AD_ADD_CATEGORY_FAILURE:
      return (state = {
        ...state,
        loading: false,
        message: action.payload,
      });
    // FETCH CATEGORY
    case ActCategories.AD_FETCH_CATEGORY_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case ActCategories.AD_FETCH_CATEGORY_SUCCESS:
      console.log(action.payload);
      return (state = {
        ...state,
        loading: false,
        category: action.payload.category,
      });
    case ActCategories.AD_FETCH_CATEGORY_FAILURE:
      return (state = {
        ...state,
        loading: false,
        message: action.payload,
      });
    default:
      return state;
  }
};
