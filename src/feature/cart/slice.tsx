import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Menu } from "../../entities/menu";
import { Voucher } from "../../entities/voucher";
import { CartGood } from "../../entities/cartGoods";

const emptyMenu = {
  id    : 0,
  nama  : "dummy",
  harga : 10000,
  tipe  : "dummy",
  gambar: "dummy"
}

type MenuBundle = {
  menu: Menu;
  count: number;
  note : string;
}

type CartState = {
  menuBundle: CartGood[]
  voucher: Voucher | null | undefined;
  total: number;
  discount: number;
};

const initialState: CartState = {
  menuBundle: [],
  voucher: null,
  total: 0,
  discount: 0
};

function countTotalBundle(menuBundle :MenuBundle[]){
  if(menuBundle.length < 1) return 0;
  const total1 = menuBundle.map(men => men.menu.harga * men.count);
  if(total1.length === 1) return total1[0];
  const total = total1.reduce((prev = 0, next = 0) => prev + next)
  return total;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addMenu: (state, action: PayloadAction<Menu>) => {
      if(state.menuBundle.find(bundle => action.payload.id === bundle.menu.id) != undefined)
        return;
      state.menuBundle.push({
        menu : action.payload,
        count: 1,
        note: ""
      });
      state.total = countTotalBundle(state.menuBundle)
    },
    resetCart: state => {
      state = initialState;
    },
    removeMenu: (state, action: PayloadAction<Menu>) => {
      const menuFiltered = state.menuBundle.filter(men => men.menu.id !== action.payload.id);
      state.menuBundle = menuFiltered;
      state.total = countTotalBundle(state.menuBundle)
    },
    addMenuBundlecount: (state, action: PayloadAction<Menu>) => {
      const menuFind = state.menuBundle.findIndex(menuBund => menuBund.menu.id === action.payload.id);
      if(menuFind === -1 || menuFind === undefined || menuFind === null)
        return;
      state.menuBundle[menuFind].count = state.menuBundle[menuFind].count + 1;
      state.total = countTotalBundle(state.menuBundle)
    },
    subbtractMenuBundlecount: (state, action: PayloadAction<Menu>) => {
      const menuFind = state.menuBundle.findIndex(menuBund => menuBund.menu.id === action.payload.id);
      if(menuFind === -1 || menuFind === undefined || menuFind === null)
        return;
      state.menuBundle[menuFind].count = state.menuBundle[menuFind].count - 1;
      state.total = countTotalBundle(state.menuBundle)
    },
    changeNote: (state, action: PayloadAction<{menu: Menu, note: string}>)=>{
      const menuFind = state.menuBundle.findIndex(menuBund => menuBund.menu.id === action.payload.menu.id);
      if(menuFind === -1 || menuFind === undefined || menuFind === null)
        return;
      state.menuBundle[menuFind].note = action.payload.note;
      state.total = countTotalBundle(state.menuBundle)
    },
    setDiscount: (state, action: PayloadAction<number>)=>{
      console.log(action.payload);
      state.discount = action.payload;
    }
  },
});

export default cartSlice.reducer;
export const {addMenu, removeMenu, resetCart, addMenuBundlecount, subbtractMenuBundlecount, changeNote, setDiscount} = cartSlice.actions
