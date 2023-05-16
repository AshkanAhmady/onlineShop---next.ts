import { combineReducers } from "redux";

import { userSignInReducer, userSignUpReducer } from "./user/userReducer";

const rootReducer = combineReducers({
  userSignIn: userSignInReducer,
  userSignUp: userSignUpReducer,
});

export default rootReducer;
