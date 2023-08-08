import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./../feature/cart/slice";
import cartModalReducer from "./../feature/cartModal/slice";

const store = configureStore({
  reducer: {
    cart : cartReducer,
    cartModal: cartModalReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;