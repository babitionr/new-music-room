import React, { PropsWithChildren, useEffect, useState, Fragment } from "react";
import { Dropdown } from "antd";
import classNames from "classnames";
import { Arrow, Logo } from "@svgs";
import Menu from "./menu";

const Layout = ({ children }: PropsWithChildren) => {
  const [isCollapsed, set_isCollapsed] = useState(window.innerWidth < 1025);
  const [isDesktop, set_isDesktop] = useState(window.innerWidth > 640);
  const Header = () => (
    <header
      className={classNames(
        "w-full h-16 transition-all duration-300 ease-in-out top-0 block sm:bg-gradient-to-r from-slateBlue-500 via-lightGray-500 to-midnight-500  z-20 fixed lg:relative"
      )}
    >
      <div className="flex items-center justify-end sm:justify-between px-5 h-16">
        <div>
          <h1 className={"text-xl font-bold hidden sm:block"}>{}</h1>

          <div className={"hidden sm:flex items-center text-xs mt-0.5"}>
            <Fragment>
              <span className={classNames("text-gray-400")}>Title</span>{" "}
            </Fragment>
          </div>
        </div>

        <div className="flex items-center gap-5 absolute right-6">
          
        </div>
      </div>
    </header>
  );
  return (
    <main>
      <div className="h-16 relative bg-lightGray-500">
        <div className="absolute top-0 left-0 right-0">
          <Header />
          {children}
        </div>
      </div>
      <div
        className={classNames(
          "flex items-center justify-between bg-white sm:bg-slateBlue-500 text-gray-800 hover:text-gray-500 h-16 fixed top-0 left-2 pr-5 pl-3 font-bold transition-all duration-300 ease-in-out rounded-tr-2xl z-20 w-64 "
        )}
      >
        <div className="flex">
          <div className={classNames("hamburger sm:!hidden")}>
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>

          <a href="/" className="flex items-center group">
            <Logo className={classNames("w-12 mr-3")} />
            <div
              id={"name-application"}
              className={classNames(
                "transition-all duration-500 font-sans ease-in-out absolute text-lightGray-500 left-16 overflow-ellipsis overflow-hidden ml-3"
              )}
            >
              Music Room
            </div>
          </a>
        </div>
        <div className={classNames("relative")}></div>
      </div>

      <div
        className={classNames(
          "fixed z-30 top-16 left-2 h-screen bg-midnight-500 transition-all duration-300 ease-in-out w-64 opacity-65"
        )}
      >
        <Menu />
      </div>
    </main>
  );
};

export default Layout;
