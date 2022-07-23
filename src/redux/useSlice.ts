import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "user",
  initialState: {
    name: "",
    id: "",
    isLogged: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
      state.isLogged = true;
    },
    logout: state => {
      state.name = "";
      state.id = "";
      state.isLogged = false;
    },
  },
});

export const { setUser, logout } = slice.actions;

export default slice.reducer;
