import http from "@/services/httpService";
import Router from "next/router";
import { toast } from "react-hot-toast";
import {
  SIGNIN_USER_FAILURE,
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER,
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
        toast.success("با موفقیت وارد شدید");
        Router.push("/");
      })
      .catch((err) => {
        const errorMessage =
          err.response && err?.response?.data?.message
            ? err?.response?.data?.message
            : err.message;
        toast.error(errorMessage);
        dispatch(signInUserFailure(errorMessage));
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
        dispatch(signInUserSuccess(res.data));
        toast.success("ثبت نام با موفقیت انجام شد");
        Router.push("/");
      })
      .catch((err) => {
        const errorMessage =
          err.response && err?.response?.data?.message
            ? err?.response?.data?.message
            : err.message;
        toast.error(errorMessage);
        dispatch(signInUserFailure(errorMessage));
      });
  };
};

export const signOut = () => {
  return (dispatch: any) => {
    dispatch({ type: SIGNOUT_USER });
    //  we can remove user from localStorage
    http
      .get("/user/logout")
      .then(() => {
        window.location.href = "/";
      })
      .catch();
  };
};

export const loadUser = (store: any) => {
  http
    .get("/user/load")
    .then(({ data }) => {
      store.dispatch(signInUserSuccess(data));
    })
    .catch((err) => {});
};
