import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Feature/viewSlice.js";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
