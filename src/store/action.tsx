import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { routerLinks } from "src/router-links";
import { API } from "src/utils/api";
import { State } from "./slice";
import { PaginationQuery, Responses } from "@models";

export class Action<T> {
  public name: string;
  // public set: string;
  public getHome: AsyncThunk<Responses<T[]>, PaginationQuery<T>, object>;
  constructor(name: string) {
    this.name = name;
    this.getHome = createAsyncThunk(
      name + "/home",
      async (params: PaginationQuery<T>) =>
        await API.getHome(`${routerLinks(name, "api")}`, params)
    );
  }

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
}
