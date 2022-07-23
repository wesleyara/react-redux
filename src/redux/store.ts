import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./useSlice";

interface IUserState {
  name: string;
  id: string;
  isLogged: boolean;
}

export interface IState {
  user: IUserState;
}

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

// Configura todo redux, como o provider do useContext
