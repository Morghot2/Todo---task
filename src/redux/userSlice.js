import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const userSlice = createSlice({
  name: "users",

  initialState: [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      age: 27,
    },
    {
      id: 2,
      firstName: "Lech",
      lastName: "Nowak",
      email: "nowaklech@gmail.com",
      age: 25,
    },
    {
      id: 3,
      firstName: "Jan",
      lastName: "Kowalski",
      email: "jankowalski@gmail.com",
      age: 43,
    },
  ],
  reducers: {
    addUser: (state, action) => {
      return produce(state, (draftState) => {
        draftState.push(action.payload);
      });
    },
    deleteUser: (state, action) => {
      return state.filter((user) => action.payload !== state.indexOf(user));
    },
    editUser: (state, action) => {
    //   const index = state.findIndex((entry) => entry.id === action.payload.id);
      // const index = state.indexOf(state.filter((user) => action.payload == user.id));
    //   console.log(index);
    //   console.log(action.payload.id);
    console.log(action.payload.currentUser)
      return produce(state, (draftState) => {
        draftState[action.payload.user] = action.payload.userValues;
      });
    },
  },
});

export const { addUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer;
