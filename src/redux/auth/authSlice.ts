import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}
interface IInitialState {
  user: IUser;
}

const initialState: IInitialState = {
  user: {
    _id: "",
    name: "",
    email: "",
    password: "",
    role: "",
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
