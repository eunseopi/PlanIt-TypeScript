import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import dummyPostsContents from "../../../components/units/community/posts/PostList/dummy/dummyPostItem";

type PostItem = {
  id: number | string;
  [key: string]: unknown;
};

const initialState = (dummyPostsContents ?? []) as PostItem[];

const savedPostsSlice = createSlice({
  name: "savedPosts",
  initialState,
  reducers: {
    removePost: (_state, action: PayloadAction<number | string>) =>
      initialState.filter((post) => post.id !== action.payload),
    removedPosts: (state, action: PayloadAction<number | string>) =>
      state.filter((post) => post.id !== action.payload),
  },
});

export const { removePost, removedPosts } = savedPostsSlice.actions;
export default savedPostsSlice.reducer;
