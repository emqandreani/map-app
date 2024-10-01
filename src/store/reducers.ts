import { combineReducers } from "@reduxjs/toolkit";

import alertReducer from "./features/alert/index";
import usersReducer from "./features/users/index";

export const reducers = combineReducers({
  alertReducer,
  usersReducer,
});
