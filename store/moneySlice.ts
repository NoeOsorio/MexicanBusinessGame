import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  money: 10000,
  salary: 235,
};

const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    addMoney: (state, action) => {
      state.money += action.payload;
    },
    subtractMoney: (state, action) => {
      if (state.money < action.payload) {
        state.money = 0;
        return;
      }
      state.money -= action.payload;
    },
  },
});

export const { addMoney, subtractMoney } = moneySlice.actions;
export default moneySlice.reducer;
