import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postList: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.postList.push({
        content: action.payload,
      });
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
