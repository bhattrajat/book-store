import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./rootReducer";
export const reduxStore = configureStore({
  reducer,
});

// Infer the type of makeStore
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type ReduxDispatch = typeof reduxStore.dispatch;
