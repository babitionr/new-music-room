import { CommonEntity, EStatusState, Responses } from "@models";
import { Action } from "./action";
import { PayloadAction } from "@reduxjs/toolkit";

export class Slice<T extends CommonEntity> {
  name: string;
  initialState: State<T>;
  reducers: any;
  extraReducers: (builder: any) => void;
  defaultState: State<T> = {
    result: {},
    data: undefined,
    isLoading: false,
    status: "idle",
    queryParams: "",
    keepUnusedDataFor: 60,
    time: 0,
  };
  constructor(
    action: Action<T>,
    initialState: State<T> = {},
    extraReducers?: (builder: any) => void
  ) {
    this.name = action.name;
    this.initialState = { ...this.defaultState, ...initialState };
    this.reducers = {};
    this.extraReducers = (builder: any) => {
      builder
        // .addCase(
        //   action.get.pending,
        //   (
        //     state: State<T>,
        //     action: PayloadAction<
        //       undefined,
        //       string,
        //       { arg: T; requestId: string; requestStatus: "pending" }
        //     >
        //   ) => {
        //     state.time =
        //       new Date().getTime() + (state.keepUnusedDataFor || 60) * 1000;
        //     state.queryParams = JSON.stringify(action.meta.arg);
        //     state.isLoading = true;
        //     state.status = EStatusState.getPending;
        //   }
        // )
        // .addCase(
        //   action.get.fulfilled,
        //   (state: State<T>, action: PayloadAction<Responses<T[]>>) => {
        //     console.log("Action fulfilled");
        //     if (action.payload.data) {
        //       console.log("Payload has data");
        //       state.result = action.payload;
        //       state.status = EStatusState.getFulfilled;
        //     } else {
        //       console.log("Payload has no data");
        //       state.status = EStatusState.idle;
        //     }
        //     state.isLoading = false;
        //     console.log(
        //       "State after fulfillment:",
        //       JSON.parse(JSON.stringify(state))
        //     );
        //   }
        // )
        // .addCase(action.get.rejected, (state: State) => {
        //   state.status = EStatusState.getRejected;
        //   state.isLoading = false;
        // });
      extraReducers && extraReducers(builder);
    };
  }
}

export interface State<T = object> {
  [selector: string]: any;
  result?: Responses<T[]>;
  data?: {};
  isLoading?: boolean;
  queryParams?: string;
}
