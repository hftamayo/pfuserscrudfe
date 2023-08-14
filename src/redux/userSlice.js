import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    getUser : (state, action) => {

    }
  },
});

export const {getUser} = userSlice.actions;
export default userSlice.reducer;
