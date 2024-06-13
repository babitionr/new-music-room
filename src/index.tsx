import React, { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.less";
import { ConfigProvider } from "antd";
import Router from "./router";
import { Provider } from "react-redux";
import { setupStore } from "@store";

const store = setupStore();
let container: HTMLElement;
const Styling = lazy(() => import("./utils/init/styling"));

const Context = () => {
  return (
    <Styling>
      <ConfigProvider>
        <Router />
      </ConfigProvider>
    </Styling>
  );
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    if (!container) {
      container = document.getElementById("root") as HTMLElement;
      const root = createRoot(container);
      root.render(
        <Suspense
          fallback={
            <div className="handle-preloader">
              <div className="animation-preloader">
                <div className="spinner"></div>
                <div className="txt-loading">
                  <span data-text-preloader="L" className="letters-loading">
                    L
                  </span>
                  <span data-text-preloader="o" className="letters-loading">
                    o
                  </span>
                  <span data-text-preloader="a" className="letters-loading">
                    a
                  </span>
                  <span data-text-preloader="d" className="letters-loading">
                    d
                  </span>
                  <span data-text-preloader="i" className="letters-loading">
                    i
                  </span>
                  <span data-text-preloader="n" className="letters-loading">
                    n
                  </span>
                  <span data-text-preloader="g" className="letters-loading">
                    g
                  </span>
                  <span data-text-preloader="." className="letters-loading">
                    .
                  </span>
                  <span data-text-preloader="." className="letters-loading">
                    .
                  </span>
                </div>
              </div>
            </div>
          }
        >
          <Provider store={store}>
            <Context />
          </Provider>
        </Suspense>
      );
    }
  },
  { passive: true }
);
