import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import dummyTravelMates from "../../../components/units/community/store/StoreList/dummy/dummyTravelMate";

type TravelMate = {
  id: number | string;
  [key: string]: unknown;
};

const initialState = (dummyTravelMates ?? []) as TravelMate[];

const travelMateSlice = createSlice({
  name: "travelMates",
  initialState,
  reducers: {
    removeTravelMate: (state, action: PayloadAction<number | string>) => {
      return state.filter((mate) => mate.id !== action.payload);
    },
  },
});

export const { removeTravelMate } = travelMateSlice.actions;
export default travelMateSlice.reducer;
