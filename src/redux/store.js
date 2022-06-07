import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import currentUserReducer from "./currentUserSlice"

export default configureStore({
    reducer: {
        users: userReducer,
        currentUser: currentUserReducer
    }
})
