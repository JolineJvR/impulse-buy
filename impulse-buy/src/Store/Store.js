// Import from redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import JS files
import productsReducer from "./productsSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    // Defines the root reducer
    products: productsReducer
  },
});

export default store;