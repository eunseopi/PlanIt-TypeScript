import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CommunityState = {
  currentTab: string;
};

const initialState: CommunityState = {
  currentTab: "post",
};

const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    setTab: (state, action: PayloadAction<string>) => {
      state.currentTab = action.payload;
    },
  },
});

export const { setTab } = communitySlice.actions;
export default communitySlice.reducer;
