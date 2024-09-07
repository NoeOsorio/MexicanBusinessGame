import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "./moneySlice";

const store = configureStore({
  reducer: {
    money: moneyReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;