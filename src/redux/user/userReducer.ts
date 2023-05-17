import {
  SIGNIN_USER_FAILURE,
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: true,
  user: null,
  error: null,
};

export const userSignInReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SIGNIN_USER_REQUEST:
      return {
        loading: true,
        user: null,
        error: null,
      };
    case SIGNIN_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: null,
      };
    case SIGNIN_USER_FAILURE:
      return {
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userSignUpReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SIGNUP_USER_REQUEST:
      return {
        loading: true,
        user: null,
        error: null,
      };
    case SIGNUP_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: null,
      };
    case SIGNUP_USER_FAILURE:
      return {
        loading: false,
        error: action.payload,
        user: null,
      };
    default:
      return state;
  }
};
