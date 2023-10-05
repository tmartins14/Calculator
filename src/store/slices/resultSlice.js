import { createSlice } from "@reduxjs/toolkit";
// import { evaluate } from "mathji s";

const resultSlice = createSlice({
  name: "result",
  initialState: {
    resultTerm: "",
  },
  reducers: {
    calculateResult(state, action) {
      state.resultTerm = eval(action.payload);
    },
    clearResult(state, action) {
      state.resultTerm = "";
    },
  },
});

export const { calculateResult, clearResult } = resultSlice.actions;
export const resultReducer = resultSlice.reducer;
