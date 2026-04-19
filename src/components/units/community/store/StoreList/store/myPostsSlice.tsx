import { createAction } from "../../../../../../app/store";

export const toggleMyPosts = createAction("Posts/toggleMyPosts");
export const toggleSavedPosts = createAction("Posts/toggleSavedPosts");
export const toggleTravel = createAction("Posts/toggleTravel");
export const selectPost = createAction<number | string>("Posts/selectPost");
export const selectTravelMate = createAction<number | string>(
  "Posts/selectTravelMate"
);
export const toggleDeleteMode = createAction("Posts/toggleDeleteMode");
export const openDeletePopup = createAction("Posts/openDeletePopup");
export const finishDeleteFail = createAction("Posts/finishDeleteFail");
export const finishDeleteSuccess = createAction("Posts/finishDeleteSuccess");
export const resetDeleteStatus = createAction("Posts/resetDeleteStatus");
export const startDelete = createAction("Posts/startDelete");
export const closeDeletePopup = createAction("Posts/closeDeletePopup");
export const deleteSelectedPosts = createAction("Posts/deleteSelectedPosts");
export const deleteSelectedTravelMates = createAction(
  "Posts/deleteSelectedTravelMates"
);
export const resetMyPostsFilter = createAction("Posts/resetMyPostsFilter");
