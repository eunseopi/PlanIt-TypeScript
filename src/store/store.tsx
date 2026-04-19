import { configureStore } from "@reduxjs/toolkit";
import savedPostsReducer from "./community/slice/StoragePostsSlice";
import accountReducer from "./account/accountSlice";
import travelMateReducer from "./community/slice/TravelMateSlice";
import communityReducer from "./community/slice/CommunitySlice";
import myPostsReducer from "../components/units/community/store/StoreList/store/myPostsSlice";
import chatReducer from "../components/units/chat/chatSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    savedPosts: savedPostsReducer,
    travelMates: travelMateReducer,
    community: communityReducer,
    Posts: myPostsReducer,
    chat: chatReducer,
  },
});
