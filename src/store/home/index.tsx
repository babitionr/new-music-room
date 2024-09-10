import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "../action";
import {
  CommonEntity,
  EStatusState,
  PaginationQuery,
  Responses,
} from "@models";
import { useAppDispatch, useTypedSelector } from "@store";
import { API } from "@utils";

const name = "home";
export const homeAction = {
  ...new Action<Home>(name),
  getHome: createAsyncThunk(name, async () => await API.get<Home>("home")),
};

type HomeState = {
  result: any;
  data: any;
  isLoading: boolean;
  isVisible: boolean;
  status: EStatusState;
  queryParams: string;
  keepUnusedDataFor: number;
  time: number;
  url: any
};

const initialState: HomeState = {
  result: {},
  data: undefined,
  isLoading: false,
  isVisible: false,
  status: EStatusState.idle,
  queryParams: "",
  keepUnusedDataFor: 60,
  time: 0,
  url: ''
};

export const homeSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(
        homeAction.getHome.pending,
        (
          state: HomeState,
          action: PayloadAction<
            undefined,
            string,
            { arg: Home; requestId: string; requestStatus: "pending" }
          >
        ) => {
          state.time =
            new Date().getTime() + (state.keepUnusedDataFor || 60) * 1000;
          state.queryParams = JSON.stringify(action.meta.arg);
          state.isLoading = true;
          state.status = EStatusState.getPending;
        }
      )
      .addCase(
        homeAction.getHome.fulfilled,
        (state: HomeState, action: PayloadAction<Responses<Home[]>>) => {
          if (action.payload.data) {
            state.result = action.payload;
            state.status = EStatusState.getFulfilled;
          } else {
            state.status = EStatusState.idle;
          }
          state.isLoading = false;
        }
      )
      .addCase(homeAction.getHome.rejected, (state: HomeState) => {
        state.status = EStatusState.getRejected;
        state.isLoading = false;
      });
  },
});

export const HomeFacade = () => {
  const dispatch = useAppDispatch();
  return {
    ...useTypedSelector((state) => state[name] as HomeState),
    getHome: () => dispatch(homeAction.getHome()),
  };
};

export class Home extends CommonEntity {
  constructor(
    public name?: string,
    public thumbnail?: string,
    public encodeId?: string,
    public id?: any
  ) {
    super();
  }
}
