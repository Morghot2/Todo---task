import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const buttonSlice = createSlice({
  name: "button",
  initialState: { show: false, type: "" },
  reducers: {
      changeModal: (state, action) => {
        // return state.show =!state.show
          return produce(state, (draftState) => {
            return draftState = { ...state, show: action.payload }
          })
      }
  }
});

export const { changeModal } = buttonSlice.actions;
export default buttonSlice.reducer;
