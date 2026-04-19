import type { RootState } from "../../app/store";

export const selectUser = (state: RootState) => state.account.user;
export const selectIsAuthenticated = (state: RootState) => state.account.isAuthenticated;
export const selectFollowers = (state: RootState) => state.account.followers;
export const selectFollwers = selectFollowers;
export const selectFollowing = (state: RootState) => state.account.following;
