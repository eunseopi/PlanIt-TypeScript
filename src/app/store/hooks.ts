import { useAppStore, type AppDispatch, type RootState } from "./index";

export const useAppDispatch = (): AppDispatch =>
  useAppStore((state) => state.dispatch);

export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected
): TSelected => useAppStore(selector);
