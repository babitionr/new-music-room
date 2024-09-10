import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";

import { API, routerLinks } from "@utils";
import { CommonEntity, PaginationQuery, Responses } from "@models";
import { State } from "@store";

// export const play = (flag: any) => ({
//   type: "PLAY",
//   flag,
// });
// export const setCurSongId = (sid: any) => ({
//   type: "SET_CUR_SONG_ID",
//   sid,
// });
export class Action<T extends CommonEntity> {
  public name: string;
  public get: AsyncThunk<Responses<T[]>, PaginationQuery<T>, object>;
  // public getDetailsong: AsyncThunk<
  //   { data: {} | undefined; keyState: keyof State<T> },
  //   { id: string; keyState: keyof State<T> },
  //   object
  // >;
  // public getById: AsyncThunk<
  //   { data: T | undefined; keyState: keyof State<T> },
  //   { id: string; keyState: keyof State<T> },
  //   object
  // >;
  // public post: AsyncThunk<T | undefined, T, object>;
  // public put: AsyncThunk<T | undefined, T, object>;
  // public putDisable: AsyncThunk<T | undefined, { id: string; disable: boolean }, object>;
  // public delete: AsyncThunk<T | undefined, string, object>;
  constructor(name: string) {
    this.name = name;
    this.get = createAsyncThunk(
      name + "/get",
      async (params: PaginationQuery<T>) =>
        await API.get(`${routerLinks(name, "api")}`, params)
    );
    // this.getDetailsong = createAsyncThunk(
    //   name + "/getSong",
    //   async ({
    //     id,
    //     keyState = "isVisible",
    //   }: {
    //     id: string;
    //     keyState: keyof State<T>;
    //   }) => {
    //     const { data } = await API.get<T>(`${routerLinks(name, "api")}/${id}`);
    //     return { data, keyState };
    //   }
    // );
  }
}
// this.getById = createAsyncThunk(
//   name + '/getById',
//   async ({ id, keyState = 'isVisible' }: { id: string; keyState: keyof State<T> }) => {
//     const { data } = await API.get<T>(`${routerLinks(name, 'api')}/${id}`);
//     return { data, keyState };
//   },
// );
// this.post = createAsyncThunk(name + '/post', async (values: T) => {
//   const { data, message } = await API.post<T>(`${routerLinks(name, 'api')}`, values);
//   return data;
// });
// this.put = createAsyncThunk(name + '/put', async ({ id, ...values }: T) => {
//   const { data, message } = await API.put<T>(`${routerLinks(name, 'api')}/${id}`, values);
//   return data;
// });
// this.putDisable = createAsyncThunk(
//   name + '/putDisable',
//   async ({ id, disable }: { id: string; disable: boolean }) => {
//     const { data, message } = await API.put<T>(`${routerLinks(name, 'api')}/${id}/disable/${disable}`, {});
//     return data;
//   },
// );
// this.delete = createAsyncThunk(name + '/delete', async (id: string) => {
//   const { data, message } = await API.delete<T>(`${routerLinks(name, 'api')}/${id}`);
//   return data;
// });

// this.getSong = createAsyncThunk(
//   name + "/getsong",
//   async ({ id }: { id: string }) => {
//     const { data } = await API.getSong<T>(`song/${id}`);
//     return { data };
//   }
// );

// getSong
// router.get("/song", ZingController.getSong)

// getDetailPlaylist
// router.get("/detailplaylist", ZingController.getDetailPlaylist)

// getHome
// router.get("/home", ZingController.getHome)

// getTop100
// router.get("/top100", ZingController.getTop100)

// getChartHome
// router.get("/charthome", ZingController.getChartHome)

// getNewReleaseChart
// router.get("/newreleasechart", ZingController.getNewReleaseChart)

// getInfoSong
// router.get("/infosong", ZingController.getInfo)

// getArtist
// router.get("/artist", ZingController.getArtist)

// getArtistSong
// router.get("/artistsong", ZingController.getArtistSong)

// getLyric
// router.get("/lyric", ZingController.getLyric)

// search
// router.get("/search", ZingController.search)

// getListMV
// router.get("/listmv", ZingController.getListMV)

// getCategoryMV
// router.get("/categorymv", ZingController.getCategoryMV)

// getVideo
// router.get("/video", ZingController.getVideo)
