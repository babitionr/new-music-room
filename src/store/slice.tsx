import { Responses } from "@models";
import { Action } from "./action";
import { PayloadAction } from "@reduxjs/toolkit";

export class Slice<T> {
  name: string;
  initialState: State<T>;
  reducers: any;
  extraReducers: (builder: any) => void;
  defaultState: State<T> = {
    result: {},
    data: undefined,
  };
  constructor(
    action: Action<T>,
    initialState: State<T> = {},
    extraReducers?: (builder: any) => void
  ) {
    this.name = action.name;
    this.initialState = {};
    this.extraReducers = (builder: any) => {
      builder
        .addCase(
          action.getHome.pending,
          (state: State<T>, action: PayloadAction<State<T>>) => {
            Object.keys(action.payload).forEach((key) => {
              state[key] = action.payload[key as keyof State<T>];
            });
            state.status = "idle";
          }
        )
        .addCase(
          action.getHome.fulfilled,
          (state: State<T>, action: PayloadAction<Responses<T[]>>) => {
            if (action.payload.data) {
              state.result = action.payload;
              state.status = "getHome.fulfilled";
            } else state.status = "idle";
            state.isLoading = false;
          }
        )
        .addCase(action.getHome.rejected, (state: State) => {
          state.status = "getHome.rejected";
          state.isLoading = false;
        });
    };
  }
}

export interface State<T = object> {
  [selector: string]: any;
  result?: Responses<T[]>;
  data?: T;
  isLoading?: boolean;
  queryParams?: string;
}
