import React, { Suspense, useEffect } from "react";
import { HashRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { routerLinks } from "./router-links";
import { Spin } from "antd";

const pages = [
  // {
  //     layout: React.lazy(() => import('@layouts/auth')),
  //     isPublic: true,
  //     child: [
  //         {
  //             path: routerLinks('exam')
  //         }
  //     ]
  // }
  {
    layout: React.lazy(() => import("@layouts/admin")),
    isPublic: false,
    child: [
      {
        path: "/",
        component: routerLinks("Dashboard"),
      },
      {
        path: routerLinks("Dashboard"),
        component: React.lazy(() => import("@pages/dashboard")),
        title: "Dashboard",
      },
    ],
  },
];

const Layout = ({
  layout: Layout,
  isPublic = false,
}: {
  layout: React.LazyExoticComponent<
    ({ children }: { children?: React.ReactNode }) => JSX.Element
  >;
  isPublic: boolean;
}) => {
  // if (isPublic || !!localStorage.getItem(keyToken))
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
  // return <Navigate to={`/${lang}${routerLinks('Login')}`} />;
};

const Page = ({
  title = "",
  component: Comp,
}: {
  title: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}) => {
  // const { t } = useTranslation();
  // const globalFacade = GlobalFacade();

  // useEffect(() => {
  //   document.title = t('pages.' + title || '', globalFacade.titleOption || {});
  //   globalFacade.set({ title });
  // }, [title, globalFacade.titleOption]);
  return <Comp />;
};

const Pages = () => {
  return (
    <HashRouter>
      <Routes>
        <Route>
          {pages.map(({ layout, isPublic, child }, index) => (
            <Route
              key={index}
              element={<Layout layout={layout} isPublic={isPublic} />}
            >
              {child.map(
                ({ path = "", title = "", component }, subIndex: number) => (
                  <Route
                    key={path + subIndex}
                    path={path}
                    element={
                      <Suspense
                        fallback={
                          <Spin>
                            <div className="w-screen h-screen" />
                          </Spin>
                        }
                      >
                        {typeof component === "string" ? (
                          <Navigate to={component} />
                        ) : (
                          <Page title={title} component={component} />
                        )}
                      </Suspense>
                    }
                  />
                )
              )}
            </Route>
          ))}
        </Route>
        <Route path="*" />
      </Routes>
    </HashRouter>
  );
};

export default Pages;
