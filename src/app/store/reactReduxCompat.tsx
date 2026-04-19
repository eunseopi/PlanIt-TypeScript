import type { ReactNode } from "react";

import { useAppDispatch, useAppSelector } from "./hooks";
import type { RootState } from "./index";

export type TypedUseSelectorHook<TState> = <TSelected>(
  selector: (state: TState) => TSelected
) => TSelected;

export const useDispatch = useAppDispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export function Provider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
