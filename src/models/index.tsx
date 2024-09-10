export * from "./api";

export enum EStatusState {
  idle = "idle",
  getPending = "get.pending",
  getFulfilled = "get.fulfilled",
  getRejected = "get.rejected",
  getSongDetailPending = "getSongDetail.pending",
  getSongDetailFulfilled = "getSongDetail.fulfilled",
  getSongDetailRejected = "getSongDetail.rejected",
  postPending = "post.pending",
  postFulfilled = "post.fulfilled",
  postRejected = "post.rejected",
  putPending = "put.pending",
  putFulfilled = "put.fulfilled",
  putRejected = "put.rejected",
  putDisablePending = "putDisable.pending",
  putDisableFulfilled = "putDisable.fulfilled",
  putDisableRejected = "putDisable.rejected",
  deletePending = "delete.pending",
  deleteFulfilled = "delete.fulfilled",
  deleteRejected = "delete.rejected",
}
