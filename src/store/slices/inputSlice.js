import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    inputTerm: "",
  },
  reducers: {
    setInput(state, action) {
      if (state.inputTerm === "") {
        console.log("initial state:", state.inputTerm);
        state.inputTerm = action.payload;
        console.log("new state:", state.inputTerm);
      } else {
        state.inputTerm = state.inputTerm + action.payload;
        console.log("Current state:", state.inputTerm);
      }
    },
    // Clicking the AC Button
    clearInput(state, action) {
      state.inputTerm = "";
    },
  },
});

export const { setInput, clearInput } = inputSlice.actions;
export const inputReducer = inputSlice.reducer;
