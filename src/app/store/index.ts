import { configureStore } from "@reduxjs/toolkit";

import savedPostsReducer from "../../store/community/slice/StoragePostsSlice";
import accountReducer from "../../store/account/accountSlice";
import travelMateReducer from "../../store/community/slice/TravelMateSlice";
import communityReducer from "../../store/community/slice/CommunitySlice";
import myPostsReducer from "../../components/units/community/store/StoreList/store/myPostsSlice";
import chatReducer from "../../components/units/chat/chatSlice";

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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
