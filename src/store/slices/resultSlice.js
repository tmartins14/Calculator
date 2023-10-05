import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: {
    resultTerm: "",
    error: null,
  },
  reducers: {
    calculateResult(state, action) {
      try {
        state.resultTerm = eval(action.payload);
        state.error = null;
      } catch (error) {
        state.resultTerm = "";
        state.error = error.message;
      }
    },
    clearResult(state, action) {
      state.resultTerm = "";
      state.error = null;
    },
  },
});

export const { calculateResult, clearResult } = resultSlice.actions;
export const resultReducer = resultSlice.reducer;
