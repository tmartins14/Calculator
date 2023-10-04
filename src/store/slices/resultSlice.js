import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: {
    resultTerm: "",
  },
  reducers: {
    calculateResult(state, action) {
      console.log(state);
    },
    clearResult(state, action) {
      state.resultTerm = "";
    },
  },
});

export const { calculateResult, clearResult } = resultSlice.actions;
export const resultReducer = resultSlice.reducer;
