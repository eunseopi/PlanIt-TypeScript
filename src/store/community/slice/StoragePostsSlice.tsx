import { createAction } from "../../../app/store";

export const removePost = createAction<number | string>("savedPosts/removePost");
export const removedPosts = createAction<number | string>("savedPosts/removedPosts");
