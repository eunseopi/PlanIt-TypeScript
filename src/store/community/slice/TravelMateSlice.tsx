import { createAction } from "../../../app/store";

export const removeTravelMate = createAction<number | string>(
  "travelMates/removeTravelMate"
);
