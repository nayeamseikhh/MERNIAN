import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Feature/viewSlice.js";
import productReducer from "./Feature/viewSlice2.js";

const store = configureStore({
  reducer: {
    posts: postReducer,
    product: productReducer,
  },
});

export default store;
