import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IProduct {
  _id: string;
  title: string;
  imageURL: string;
  category: string;
  description: string;
  quantity: number;
  review: number;
  rating: number;
  donorName: number;
  donorImageURL: string;
  supply: number;
  sold: number;
}

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
