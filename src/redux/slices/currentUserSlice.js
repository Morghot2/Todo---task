import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: 0,
  reducers: {
    changeCurrentUser: (action, state) => {
      return produce(state, (draftState) => {
        draftState = action.payload;
      });
    },
  },
});

export const { changeCurrentUser } = currentUserSlice.actions;
export default currentUserSlice.reducer;
