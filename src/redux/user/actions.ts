import http from "@/services/httpService";
import {
  SIGNIN_USER_FAILURE,
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
} from "./userTypes";

export const signInUserRequest = () => {
  return {
    type: SIGNIN_USER_REQUEST,
  };
};

export const signInUserSuccess = (user: any) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: user,
  };
};

export const signInUserFailure = (error: any) => {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error,
  };
};

export const signUpUserRequest = () => {
  return {
    type: SIGNUP_USER_REQUEST,
  };
};

export const signUpUserSuccess = (user: any) => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: user,
  };
};

export const signUpUserFailure = (error: any) => {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error,
  };
};

export const userSignIn = (data: any) => {
  return (dispatch: any) => {
    dispatch(signInUserRequest());
    http
      .post("/user/signin", data)
      .then((res) => {
        dispatch(signInUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(signInUserFailure(err.message));
      });
  };
};

export const userSignUp = (data: any) => {
  return (dispatch: any) => {
    dispatch(signUpUserRequest());
    http
      .post("/user/signup", data)
      .then((res) => {
        dispatch(signUpUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(signUpUserFailure(err.message));
      });
  };
};
