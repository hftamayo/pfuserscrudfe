import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload.map((user) => {
        return {
          id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          age: user.age,
        };
      });
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex((x) => x.id === action.payload.id);
      state.users[index] = {
        id: action.payload.id,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        email: action.payload.email,
        age: action.payload.age,
      };
    },
    deleteUser: (state, action) => {
      const id = action.payload.id;
      state.users = state.users.filter(u => u.id !== id)
    }
  },
});

export const { getUser, addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
