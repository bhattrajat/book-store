import type { ReduxState, ReduxDispatch, ReduxStore } from "./store";
import { useDispatch, useSelector, useStore } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => ReduxDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;
export const useAppStore: () => ReduxStore = useStore;
