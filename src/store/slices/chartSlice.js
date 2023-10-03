import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  time: 61,
  directionBet: null,
};

export const counterSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    shortBet: (state, action) => {
      state.directionBet = action.payload;
    },
    longBet: (state, action) => {
      state.directionBet = action.payload;
    },
    incrementTime: (state) => {
      state.time += 1;
    },
    decrementTime: (state) => {
      state.time -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, shortBet, longBet, incrementTime, decrementTime } = counterSlice.actions;

export default counterSlice.reducer;
