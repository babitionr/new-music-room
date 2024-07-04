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
        "bg-white w-full h-16 transition-all duration-300 ease-in-out top-0 block sm:bg-gray-100 z-20 fixed lg:relative"
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
          {/* <Dropdown
            trigger={['click']}
            menu={{
              items: [
                {
                  key: '0',
                  className: 'hover:!bg-white !border-b-slate-300 border-b !rounded-none',
                  label: (
                    <div className="flex">
                      <Avatar src={user?.avatar || ''} size={8} />
                      <div className="text-left leading-none mr-3 block pl-2">
                        <div className="font-semibold text-black text-sm leading-snug mb-0.5">{user?.name}</div>
                        <div className="text-gray-500 text-[10px]">{user?.email}</div>
                      </div>
                    </div>
                  ),
                },
                {
                  key: '1',
                  className: 'h-11',
                  label: (
                    <div
                      className="flex"
                      onClick={() => navigate(`/${lang}${routerLinks('MyProfile')}?tab=1`, { replace: true })}
                    >
                      <div className="flex items-center">
                        <User className="w-6 h-6 pr-2 text-black" />
                      </div>
                      <div>{t('routes.admin.Layout.My Profile')}</div>
                    </div>
                  ),
                },
                {
                  key: '2',
                  className: 'h-11 !border-b-slate-300 border-b !rounded-none',
                  label: (
                    <div
                      className="flex"
                      onClick={() => navigate(`/${lang}${routerLinks('MyProfile')}?tab=2`, { replace: true })}
                    >
                      <div className="flex items-center">
                        <Key className="w-6 h-6 pr-2 text-black" />
                      </div>
                      <div>{t('routes.admin.Layout.Change Password')}</div>
                    </div>
                  ),
                },
                {
                  key: '3',
                  className: 'h-11',
                  label: (
                    <div
                      className="flex"
                      onClick={() => navigate(`/${lang}${routerLinks('Login')}`, { replace: true })}
                    >
                      <div className="flex items-center">
                        <Out className="w-6 h-6 pr-2 text-black" />
                      </div>
                      <div>{t('routes.admin.Layout.Sign out')}</div>
                    </div>
                  ),
                },
              ],
            }}
            placement="bottomRight"
          >
            <section className="flex items-center !rounded-full" id={'dropdown-profile'}>
              <Avatar src={user?.avatar || ''} size={10} />
            </section>
          </Dropdown> */}
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
