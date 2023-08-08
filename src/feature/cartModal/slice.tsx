import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Menu } from "../../entities/menu";
import { Voucher } from "../../entities/voucher";

type CartModalState = {
  isOpen: boolean;
};

const initialState: CartModalState = {
  isOpen: false
};

export const cartSlice = createSlice({
  name: "cartModal",
  initialState,
  reducers: {
    toggle: (state) => {state.isOpen = !state.isOpen},
    openModal: state => {state.isOpen = true},
    closeModal: state => {state.isOpen = false}
  },
});

export default cartSlice.reducer;
export const {closeModal, openModal, toggle} = cartSlice.actions
