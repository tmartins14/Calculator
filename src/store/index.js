import { configureStore } from "@reduxjs/toolkit";
import { setInput, clearInput, inputReducer } from "./slices/inputSlice";
import {
  calculateResult,
  clearResult,
  resultReducer,
} from "./slices/resultSlice";

const store = configureStore({
  reducer: {
    input: inputReducer,
    result: resultReducer,
  },
});

export { store, setInput, clearInput, calculateResult, clearResult };
