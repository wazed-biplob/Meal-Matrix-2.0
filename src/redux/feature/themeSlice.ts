import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "dark",
  reducers: {
    switchTheme: (state, action) => {
      state = action?.payload;
    },
  },
});

export default themeSlice.reducer;
export const { switchTheme } = themeSlice.actions;
