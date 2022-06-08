import buttonReducer from "./slices/buttonSlice";
import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./slices/currentUserSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    users: userReducer,
    currentUser: currentUserReducer,
    button: buttonReducer,
  },
});
