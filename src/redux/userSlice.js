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
      //   const newUser = {
      //       id: action.payload.id,
      //       firstName: action.payload.firstName,
      //       lastName: action.payload.lastName,
      //       email: action.payload.email,
      //       age: action.payload.age,

      //   };
      state.push(newUser);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
