import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
}
interface IInitialState {
  user: IUser;
}

const initialState: IInitialState = {
  user: {
    _id: "",
    username: "",
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addUser: (state: any, action: PayloadAction<IInitialState>) => {
      const user = action.payload;
      state.user = user;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    logout: (state: any) => {
      state.user = null;
    },
  },
});

export const { addUser, logout } = authSlice.actions;
export default authSlice.reducer;
