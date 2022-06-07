import { createSlice } from "@reduxjs/toolkit";

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
      const newUser = action.payload;
      state.push(newUser);
    },
    deleteUser: (state, action) => {
        return state.filter((user) => action.payload !== state.indexOf(user))
    },
    editUser: (state, action) => {
        return state.filter((user) => action.payload !== state.indexOf(user))
    },
    
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
