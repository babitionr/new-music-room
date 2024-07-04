import { useEffect, useRef, useState } from "react";
import listMenu from "../menus";
import classNames from "classnames";
import { routerLinks } from "src/router-links";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";
import { Collapse, Popover } from "antd";

import "./index.less";

const Layout = () => {
  const navigate = useNavigate();

  const clearTime = useRef<NodeJS.Timeout>();

  const refMenu = useRef<HTMLUListElement>(null);
  const [menuActive, set_menuActive] = useState<string[]>();
  useEffect(() => {
    clearTimeout(clearTime.current);
    let linkActive = "";
    listMenu.forEach((item) => {
      if (
        !linkActive &&
        !!item.child &&
        location.hash.substring(1).indexOf(`${routerLinks(item.name)}`) > -1
      ) {
        linkActive = `${routerLinks(item.name)}`;
      }
    });
    clearTime.current = setTimeout(() => set_menuActive([linkActive]), 200);
  }, [location.hash]);

  // useEffect(() => {
  //   if (isCollapsed) {
  //     refMenu!.current!.scrollTop = 0;
  //   }
  // }, [isCollapsed]);
  const subMenu = (child: any[]) => (
    <ul className={"menu"}>
      {child.map((subItem, index: number) => (
        <li
          key={index}
          className={classNames(
            "group flex items-center pl-9 py-2 cursor-pointer rounded-2xl text-gray-300 font-medium text-base",
            {
              "bg-teal-700 text-white !fill-gray-300":
                location.pathname.indexOf(`${routerLinks(subItem.name)}`) > -1,
            }
          )}
          onClick={() =>
            navigate({
              pathname: `${routerLinks(subItem.name)}`,
              search: `?${createSearchParams(subItem.queryParams)}`,
            })
          }
        >
          <p className="h-1 w-1 mr-3 rounded-lg bg-white group-hover:w-2 duration-300 ease-in-out transition-all"></p>
          <a className="hover:text-white sub-menu">
            <span>ohno</span>
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <ul>
      {!!menuActive &&
        listMenu.map((item, index) => {
          if (!item.child) {
            return (
              <li
                className={classNames(
                  "flex items-center text-gray-300 h-12 m-2 relative cursor-pointer py-1 px-2",
                  {
                    "bg-teal-700 text-white !fill-gray-300 rounded-2xl opacity-100":
                      location.pathname === `${routerLinks(item.name)}`,
                    "fill-gray-300":
                      location.pathname !== `${routerLinks(item.name)}`,
                  }
                )}
                onClick={() =>
                  navigate({
                    pathname: `${routerLinks(item.name)}`,
                    //   search: `?${createSearchParams(item.queryParams)}`,
                  })
                }
                key={index}
              >
                <div>{item.icon}</div>
                <span
                  className={classNames(
                    "ml-2.5 transition-all duration-300 ease-in-out font-medium text-base !h-8 flex items-center"
                  )}
                >
                  {`${item.name}`}
                </span>
              </li>
            );
          } else {
            return (
              <>
                <Popover
                  key={index}
                  placement="rightTop"
                  trigger={"hover"}
                  content={subMenu(item.child)}
                >
                  <li className="flex items-center justify-center h-12 m-2 px-2 text-gray-300 fill-gray-300 ">
                    <div className={classNames("ml-1")}>{item.icon}</div>
                  </li>
                </Popover>
                <li className="my-1 px-1" key={index}>
                  <Collapse
                    accordion
                    bordered={false}
                    className={classNames("bg-teal-900", {
                      "active-menu":
                        location.pathname.indexOf(`${routerLinks(item.name)}`) >
                        -1,
                    })}
                    defaultActiveKey={menuActive}
                    items={[
                      {
                        key: `${routerLinks(item.name)}`,
                        showArrow: true,
                        label: (
                          <ul>
                            <li
                              className={classNames(
                                "flex items-center text-gray-300 fill-gray-300 menu"
                              )}
                            >
                              <span className={classNames("ml-1")}>
                                {item.icon}
                              </span>
                              <span
                                className={classNames(
                                  "pl-2.5 transition-all duration-300 ease-in-out font-medium text-base text-gray-300"
                                )}
                              >
                                Ohno
                              </span>
                            </li>
                          </ul>
                        ),
                        children: subMenu(item.child),
                      },
                    ]}
                  />
                </li>
              </>
            );
          }
        })}
    </ul>
  );
};
export default Layout;
