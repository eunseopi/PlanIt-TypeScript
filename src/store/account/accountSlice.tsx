import { createAction, type User } from "../../app/store";

export const setUser = createAction<User>("account/setUser");
export const clearUser = createAction("account/clearUser");
export const setFollowers = createAction<unknown[]>("account/setFollowers");
export const setFollowing = createAction<unknown[]>("account/setFollowing");
