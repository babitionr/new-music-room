import { HomeFacade } from "@store";
import classNames from "classnames";
import { useEffect, useState } from "react";

const Page = () => {
  const homeFacade = HomeFacade();
  useEffect(() => {
    homeFacade.getHome;
  }, []);
  console.log(homeFacade.result);
  return (
    <>
      <div className="absolute left-0 right-0">
        <div
          className={classNames("container grid mx-auto px-2.5 pt-2.5 pl-72")}
        >
          <div className="col-span-12 md:col-span-8 lg:col-span-9 -intro-x">
            <div className="fixed -z-10 shadow rounded-xl w-full overflow-auto bg-midnight-500 sm:min-h-[calc(100vh-8.5rem)]"></div>
            <div className="z-10 sm:min-h-[calc(100vh-8.5rem)] overflow-y-auto p-3 text-leafyGreen-500"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
