import { SongContainer } from "@core/song-container";
import { HomeFacade, SongDetailFacade } from "@store";
import { API } from "@utils";
import { Avatar, List, Spin } from "antd";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

const Page = () => {
  const homeFacade = HomeFacade();
  const songDetailFacade = SongDetailFacade();

  const [audio, setAudio] = useState(new Audio());
  const [url, setUrl] = useState<string>();

  const dispatch = useDispatch();

  //Get Home
  useEffect(() => {
    homeFacade.getHome();
  }, []);
  const newReleaseItem = homeFacade.result?.data?.items?.find(
    (item: any) => item.sectionType === "new-release"
  );
  const itemList = newReleaseItem?.items?.all || [];

  //Get Song
  // useEffect(() => {
  //   const fetchSong = (encodeId: any) => {
  //   };
  // }, []);
  const handlePlay = async (encodeId: string) => {
    const res = await songDetailFacade.getSongDetail({ encodeId });
    const urlMp3 = res.payload.url.data;
    console.log("Res:", urlMp3);

    // console.log("Detail res:", res.payload.url["128"]);
    if (urlMp3) {
      setAudio(new Audio(urlMp3)); // Cập nhật URL thay vì đối tượng Audio ngay lập tức
      console.log("audio", audio);
    }
  };

  // useEffect(() => {
  //   if (url) {
  //     const newAudio = new Audio(url);
  //     setAudio(newAudio); // Cập nhật trạng thái với đối tượng Audio mới
  //   }
  // }, [url]); // Chạy effect khi URL thay đổi

  // useEffect(() => {
  //   if (audio) {
  //     audio.play();
  //   }
  // }, [audio]); // Phát âm thanh khi đối tượng Audio thay đổi

  return (
    <>
      <div className="absolute left-0 right-0">
        <div className={classNames("grid mx-auto px-2.5 pt-2.5 pl-72")}>
          <div className="col-span-12 md:col-span-8 lg:col-span-9 -intro-x">
            <div className="fixed -z-10 shadow rounded-xl w-full overflow-auto bg-midnight-500 sm:min-h-[calc(100vh-8.5rem)]"></div>
            <div className="z-10 w-auto h-auto sm:min-h-[calc(100vh-8.5rem)] overflow-y-auto p-3 text-leafyGreen-500">
              <Spin spinning={homeFacade.isLoading}>
                <div className="w-auto h-auto pb-20">
                  {itemList.map((data: any, index: number) => (
                    <div key={index} className="flex">
                      <div
                        className="truncate px-4 py-2 hover:text-teal-900 item-text cursor-pointer"
                        onClick={() => handlePlay(data.encodeId)}
                      >
                        Play
                      </div>
                      <div className="flex-1 px-4 py-2">{data.title}</div>
                    </div>
                  ))}
                </div>
              </Spin>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
