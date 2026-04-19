import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type User = Record<string, unknown> | null;

type AccountState = {
  user: User;
  isAuthenticated: boolean;
  followers: unknown[];
  following: unknown[];
};

const initialState: AccountState = {
  user: null,
  isAuthenticated: false,
  followers: [],
  following: [],
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.followers = [];
      state.following = [];
    },
    setFollowers(state, action: PayloadAction<unknown[]>) {
      state.followers = action.payload;
    },
    setFollowing(state, action: PayloadAction<unknown[]>) {
      state.following = action.payload;
    },
  },
});

export const { setUser, clearUser, setFollowers, setFollowing } = accountSlice.actions;
export default accountSlice.reducer;
