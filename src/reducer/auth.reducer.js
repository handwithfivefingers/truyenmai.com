import { Authenticate } from './../action/constant';
const initState = {
  authenticate: false,
  user: {},
  authenticating: false,
  message: '',
};
export default (state = initState, action) => {
  switch (action.type) {
    case Authenticate.LOGIN_REQUEST:
      return (state = {
        ...state,
        authenticating: true,
      });
    case Authenticate.LOGIN_SUCCESS:
      return (state = {
        ...state,
        authenticating: false,
        authenticate: true,
        user: action.payload,
      });
    case Authenticate.LOGIN_FAILURE:
      return (state = {
        ...state,
        authenticating: false,
        message: action.payload,
      });
    default:
      return initState;
  }
};
