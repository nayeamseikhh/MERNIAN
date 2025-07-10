import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postList: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.postList.unshift({
        id: Date.now(),
        content: action.payload,
      });
    },
    deletePost: (state, action) => {
      state.postList = state.postList.filter(
        (post) => post.id !== action.payload
      );
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
