import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/types";

interface IInitialState {
  products: IProduct[];
}

const initialState: IInitialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<IProduct>) => {
      state.products.push({ ...action.payload });
    },
  },
});

export default productSlice.reducer;
export const { addProducts } = productSlice.actions;
