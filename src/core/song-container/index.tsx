import React, { forwardRef } from "react";

export const SongContainer = forwardRef(
  ({ thumbnail, title, artists, encodeId, releaseDate }: Type) => {
    return (
      <div>
        <img
          src={thumbnail}
          alt="thumbnail"
          className="w-[60px] h-[60px] object-cover rounded-md"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{title}</span>
          <span className="text-xs text-gray-700">{artists}</span>
          <span className="text-xs text-gray-700">
            {/* {moment(releaseDate * 1000).fromNow()} */}
            {encodeId}
          </span>
        </div>
      </div>
    );
  }
);
type Type = {
  thumbnail: string;
  title: string;
  artists: any;
  encodeId: string;
  releaseDate: Date;
};
