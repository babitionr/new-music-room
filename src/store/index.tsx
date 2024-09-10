import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Action } from "./action";
import { Slice, State } from "./slice";
const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
const useAppDispatch = () =>
  useDispatch<ReturnType<typeof setupStore>["dispatch"]>();
const useTypedSelector: TypedUseSelectorHook<ReturnType<typeof rootReducer>> =
  useSelector;
export { setupStore, useAppDispatch, useTypedSelector, Action, Slice };
export type { State };

export * from "./home";
export * from "./songDetail";
import { homeSlice, songDetailSlice } from "./";

const rootReducer = combineReducers({
  [homeSlice.name]: homeSlice.reducer,
  [songDetailSlice.name]: songDetailSlice.reducer,
});
