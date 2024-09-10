import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "../action";
import { CommonEntity, EStatusState } from "@models";
import { useAppDispatch, useTypedSelector } from "@store";
import { API, APIMP3 } from "@utils";

const name = "songdetail";
export const songDetailAction = {
  ...new Action<SongDetail>(name),
  getSongDetail: createAsyncThunk(
    name,
    async ({ encodeId }: { encodeId: string }) => {
      const response = await API.get<{ data: SongDetail }>(
        `song?id=${encodeId}`
      );
      const response2 = await APIMP3.get(response.url.data.data["128"]);
      if (response2) {
        console.log(response2);
      }
      return response;
    }
  ),
};

type SongDetailState = {
  data: any;
  result: any;
  isLoading: boolean;
  isVisible: boolean;
  status: EStatusState;
};

const initialState: SongDetailState = {
  data: undefined,
  result: {},
  isLoading: false,
  isVisible: false,
  status: EStatusState.idle,
};

export const songDetailSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(
        songDetailAction.getSongDetail.pending,
        (state: SongDetailState) => {
          state.isLoading = true;
          state.status = EStatusState.getSongDetailPending;
        }
      )
      .addCase(
        songDetailAction.getSongDetail.fulfilled,
        (state: SongDetailState, action: PayloadAction<SongDetail>) => {
          if (action.payload) {
            state.result = action.payload;
            state.status = EStatusState.getSongDetailFulfilled;
          } else {
            state.status = EStatusState.idle;
          }
          state.isLoading = false;
        }
      )
      .addCase(
        songDetailAction.getSongDetail.rejected,
        (state: SongDetailState) => {
          state.status = EStatusState.getSongDetailRejected;
          state.isLoading = false;
        }
      );
  },
});

export const SongDetailFacade = () => {
  const dispatch = useAppDispatch();
  return {
    ...useTypedSelector((state) => state["songdetail"] as SongDetailState),
    getSongDetail: ({ encodeId }: { encodeId: any }) =>
      dispatch(songDetailAction.getSongDetail({ encodeId })),
  };
};

export class SongDetail extends CommonEntity {
  constructor(public url?: any) {
    super();
  }
}
