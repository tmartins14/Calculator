import { createSlice } from "@reduxjs/toolkit";
import { calculateResult } from "./resultSlice";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    inputTerm: "0",
  },
  reducers: {
    setInput(state, action) {
      if (state.inputTerm === "0") {
        state.inputTerm = action.payload;
      } else {
        state.inputTerm = state.inputTerm + action.payload;
      }
    },
    applyNegative(state, action) {
      state.inputTerm = state.inputTerm + "*(-1)";
    },
    // Clicking the C Button
    clearInput(state, action) {
      state.inputTerm = "0";
    },
  },
  extraReducers(builder) {
    builder.addCase(calculateResult, (state, action) => {
      try {
        state.inputTerm = eval(action.payload);
        state.error = null;
      } catch (error) {
        state.inputTerm = "Error";
        state.error = error.message;
      }
    });
  },
});

export const { setInput, clearInput, applyNegative } = inputSlice.actions;
export const inputReducer = inputSlice.reducer;
